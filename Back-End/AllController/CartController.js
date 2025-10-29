const CartSchema = require('../Model/CartSchema');
const productScema = require('../Model/productScema');
let { getIO } = require('../socket_server');

async function CreateCart(req, res, next) {
  let { user, product } = req.body;

  try {
    const productExist = await productScema.findById(product);
    if (!productExist) {
      return res.status(404).json({ msg: 'Product not found!' });
    }

    const existingCart = await CartSchema.findOne({ user, product });
    if (existingCart) {
      return res
        .status(400)
        .json({ msg: 'This product is already in your cart' });
    }

    const qty = 1;
    const additionalFees = 100;
    const originalPrice = productExist.price;
    const subtotal = originalPrice * qty;
    const shippingCost = subtotal >= 5000 ? 0 : 200;
    const discount = qty > 5 || subtotal >= 5000 ? subtotal * 0.05 : 0;
    const totalPrice = subtotal + additionalFees + shippingCost - discount;

    const Cart = new CartSchema({
      user,
      product,
      quantity: qty,
      additionalFees,
      OrginalPrice: originalPrice,
      subTotal: subtotal,
      shippingCost,
      discount,
      totalPrice,
    });

    await Cart.save();
    getIO().to(user).emit('cartADD', Cart);
    return res
      .status(200)
      .json({ msg: 'Product Added to Cart Successfully !', data: Cart });
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server error' });
  }
}

async function readcart(req, res, next) {
  let { id } = req.params;
  try {
    let Getcart = await CartSchema.find({ user: id }).populate(
      'product',
      'name photo price '
    );
    if (Getcart.length === 0) {
      return res.status(404).json({ msg: 'cart not found !' });
    }
    let CartData = Getcart.map(item => ({
      CartitemID: item._id,
      product: item.product,
      price: item.product.price,
      quantity: item.quantity,
    }));
    getIO().to(id).emit('CartData', CartData);
    return res.status(200).json(CartData);
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server Error!' });
  }
}

async function CartSummery(req, res, next) {
  let { id } = req.params;
  try {
    thisCartItem = await CartSchema.find({ user: id }).populate('product');
    if (!thisCartItem) {
      return res.status(404).json({ msg: 'Cart not Found !' });
    }
    let originalPrice = 0;
    let totalQuantity = 0;
    const additionalFees = 100;
    thisCartItem.forEach(item => {
      let productprice = item.product ? item.product.price : 0;
      let quantity = item.quantity || 0;
      subtotal += productprice * quantity;
      originalPrice += productprice;
      totalQuantity += quantity;
    });

    let shippingCost = subtotal >= 5000 ? 0 : 200;
    let discount = totalQuantity > 5 || subtotal >= 5000 ? subtotal * 0.05 : 0;
    let totalPrice = subtotal + additionalFees + shippingCost - discount;
    let Cartsummery = {
      OrginalPrice: originalPrice,
      quantity: totalQuantity,
      shippingCost,
      subTotal: subtotal,
      additionalFees,
      discount,
      totalPrice,
    };
    getIO().to(id).emit('cartSummery', Cartsummery);
    return res.status(200).json(Cartsummery);
  } catch (error) {
    next(error);
    return res
      .status(500)
      .json({ msg: 'server error !', error: error.message });
  }
}

async function IncreamentCart(req, res, next) {
  let { id } = req.params;
  let { action } = req.query;
  try {
    let cartItem = await CartSchema.findOne({ _id: id }).populate({
      path: 'product',
      select: 'price stock',
    });

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }
    if (action === 'Increment') {
      if (cartItem.quantity >= 20) {
        return res.status(400).json({ msg: 'Max quantity of 20 reached' });
      } else if (cartItem.quantity >= cartItem.product.stock) {
        return res.status(400).json({ msg: 'Not enough stock available' });
      } else {
        cartItem.quantity += 1;
      }
    } else if (action === 'Decrement') {
      if (cartItem.quantity <= 1)
        return res.status(400).json({ msg: 'Quantity cannot go below 1' });
      cartItem.quantity -= 1;
    } else {
      return res
        .status(400)
        .json({ msg: 'Invalid action or quantity cannot go below 1' });
    }
    let productPrice = cartItem.product ? cartItem.product.price : 0;
    let quantity = cartItem.quantity || 1;
    let additionalFees = cartItem.additionalFees || 100;
    let originalprice = productPrice;
    let subtotal = productPrice * cartItem.quantity;
    let shippingCost = subtotal >= 5000 ? 0 : 200;
    let discount = quantity > 10 || subtotal >= 5000 ? subtotal * 0.05 : 0;
    let totalprice = subtotal + shippingCost + additionalFees - discount;
    if (!isNaN(originalprice) && !isNaN(totalprice)) {
      cartItem.OrginalPrice = originalprice;
      cartItem.totalPrice = totalprice;
      cartItem.subTotal = subtotal;
      cartItem.discount = discount;
      cartItem.shippingCost = shippingCost;
    } else {
      return res.status(500).json({
        msg: 'Invalid price calculation',
        debug: { productPrice, quantity, additionalFees },
      });
    }

    await cartItem.save();

    let allCartItems = await CartSchema.find({ user: cartItem.user }).populate({
      path: 'product',
      select: 'price name photo',
    });

    const cartItemsArray = allCartItems.map(item => ({
      _id: item._id,
      product: item.product,
      quantity: item.quantity,
      OrginalPrice: item.product.price,
    }));

    const io = getIO();

    io.to(cartItem.user.toString()).emit('cartItems', cartItemsArray);

    let totalSubtotal = 0;
    let totalQuantity = 0;
    const fixedFee = 100;

    allCartItems.forEach(item => {
      totalSubtotal += item.product.price * item.quantity;
      totalQuantity += item.quantity;
    });

    const totalShippingCost = totalSubtotal >= 5000 ? 0 : 200;
    const totalDiscount =
      totalQuantity > 10 || totalSubtotal >= 5000 ? totalSubtotal * 0.05 : 0;
    const finalTotal =
      totalSubtotal + totalShippingCost + fixedFee - totalDiscount;

    const cartSummary = {
      OrginalPrice: totalSubtotal,
      totalQuantity,
      shippingCost: totalShippingCost,
      subtotal: totalSubtotal,
      additionalFees: fixedFee,
      discount: totalDiscount,
      totalPrice: finalTotal,
    };

    io.to(cartItem.user.toString()).emit('cartSummary', cartSummary);

    return res.status(200).json({
      msg: `Cart ${
        action === 'Increment' ? 'Incremented' : 'Decremented'
      } successfully`,
      data: {
        cartItem: cartItemsArray,
        summary: cartSummary,
      },
    });
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server error!', error: error.message });
  }
}

async function DeleteCart(req, res, next) {
  let { id } = req.params;
  let { action, userid } = req.query;
  try {
    if (action === 'single') {
      let deleteCart = await CartSchema.findById(id);
      if (!deleteCart) {
        return res.status(404).json({ msg: 'cart not found !' });
      }
      await deleteCart.deleteOne();
      getIO().to(deleteCart.user.toString()).emit('cartDeleted', id);
      return res.status(200).json({ msg: 'cart delete Successfully !', id });
    } else if (action === 'clear') {
      let deleteManyCart = await CartSchema.deleteMany({ user: userid });
      getIO().to(userid).emit('CartDeleted', userid);
      return res
        .status(200)
        .json({ msg: 'All cart delete Successfully !', deleteManyCart });
    } else {
      return res.status(400).json({ msg: 'Invaild Action' });
    }
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server error!', error: error.message });
  }
}

module.exports = {
  CreateCart,
  readcart,
  CartSummery,
  IncreamentCart,
  DeleteCart,
};
