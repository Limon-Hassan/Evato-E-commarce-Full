const Stripe = require('stripe');
const { getIO } = require('../socket_server');
const CheckoutSchema = require('../Model/CheckoutSchema');
const paymentSchema = require('../Model/paymentSchema');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

async function createPayment(req, res, next) {
  const { orderId } = req.body;
  try {
    const order = await CheckoutSchema.findOne({
      uniqueOrderID: orderId,
    }).populate('user');
    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }
    if (order.paymentStatus === 'paid') {
      return res.status(400).json({ msg: 'Order already paid.' });
    }

    let existingPayment = await paymentSchema.findOne({
      order: order.uniqueOrderID,
      status: 'pending',
    });
    if (existingPayment) {
      const existingIntent = await stripe.paymentIntents.retrieve(
        existingPayment.stripeId
      );
      return res.status(200).json({
        msg: 'Payment already initiated',
        clientSecret: existingIntent.client_secret,
        paymentId: existingPayment._id,
        orderId: order.uniqueOrderID,
      });
    }

    const currency = process.env.STRIPE_CURRENCY || 'usd';
    const amountInCents = Math.round(Number(order.totalPrice) * 100);
    if (!Number.isFinite(amountInCents) || amountInCents <= 0) {
      return res.status(400).json({ msg: 'Invalid order amount.' });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        orderId: order.uniqueOrderID,
        userId: order.user._id.toString(),
      },
    });
    const newPayment = await paymentSchema.create({
      user: order.user._id,
      order: order.uniqueOrderID,
      stripeId: paymentIntent.id,
      amount: order.totalPrice,
      currency,
      status: 'pending',
    });
    await newPayment.save();

    getIO().to(order.user._id.toString()).emit('payment_initiated', {
      msg: 'Payment has been initiated. Waiting for confirmation...',
      orderId: order.uniqueOrderID,
    });

    return res.status(200).json({
      msg: 'Payment initiated!',
      clientSecret: paymentIntent.client_secret,
      paymentId: newPayment._id,
      orderId: order.uniqueOrderID,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  } catch (error) {
    next(error);
    console.log(error);
    return res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
}

async function capturePayment(req, res, next) {
  const { paymentIntentId, orderId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ msg: 'Payment not completed yet' });
    }

    let payment = await paymentSchema
      .findOne({
        stripeId: paymentIntent.id,
      })
      .populate('order');

    if (!payment) {
      const order = await Checkout.findOne({ uniqueOrderID: orderId }).populate(
        'user'
      );
      payment = new paymentSchema({
        user: order.user._id,
        order: order.uniqueOrderID,
        stripeId: paymentIntent.id,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        status: 'succeeded',
      });
      await payment.save();
    } else {
      payment.status = 'succeeded';
      await payment.save();
    }

    payment.order.paymentStatus = 'paid';
    await payment.order.save();

    getIO().to(payment.user._id.toString()).emit('paymentSuccess', {
      orderId: payment.order,
      amount: payment.amount,
    });

    res.status(200).json({
      msg: 'Payment captured successfully!',
      payment,
    });
  } catch (error) {
    next(error);
    console.log(error);
    return res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
}

module.exports = { createPayment, capturePayment };
