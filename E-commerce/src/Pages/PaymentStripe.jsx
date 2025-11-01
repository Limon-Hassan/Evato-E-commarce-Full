import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSnackbar } from 'notistack';
import api from '../Api/axios';

const PaymentStripe = ({ orderId, amount, onSuccess }) => {
  console.log(orderId, amount, onSuccess);

  const stripe = useStripe();
  const elements = useElements();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (!name.trim()) {
      enqueueSnackbar('Please enter your name before proceeding.', {
        variant: 'warning',
      });
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post('payments/payment', { orderId });

      const { clientSecret, paymentId, orderId: returnedOrderId } = data;

      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: name,
            },
          },
        }
      );

      if (error) {
        console.log(error);
        enqueueSnackbar(error.message, { variant: 'error' });
        setLoading(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        await api.post('payments/capture', {
          paymentIntentId: paymentIntent.id,
          orderId: returnedOrderId,
        });

        enqueueSnackbar('Payment successful! 🎉', { variant: 'success' });

        if (onSuccess) onSuccess();
      }

      setLoading(false);
    } catch (err) {
      enqueueSnackbar('Payment failed: ' + err.message, { variant: 'error' });
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-md border-2 border-[#629D23]"
    >
      <h3 className="text-lg font-display text-[#2C3C28] font-bold mb-4">
        Complete Your Payment
      </h3>

      <input
        type="text"
        placeholder="Cardholder Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 outline-none border-2 border-[#e8e8e8] focus:border-[#629D23] rounded mb-4"
        required
      />

      <div className="border-2 border-[#e8e8e8] p-3 rounded mb-4">
        <CardElement
          options={{
            style: { base: { fontSize: '16px' } },
            hidePostalCode: true,
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full ${
          loading ? 'bg-gray-400' : 'bg-[#629D23]'
        } text-white py-3 rounded-md font-semibold cursor-pointer hover:bg-[#4d7f1c]`}
      >
        {loading ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        Secure payment powered by Stripe
      </p>
    </form>
  );
};

export default PaymentStripe;

// const PaymentStripe = () => {
//   let { enqueueSnackbar } = useSnackbar();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [amount, setAmount] = useState(4999);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//       billing_details: {
//         name: 'John Smith',
//         email: 'test@gmail.com',
//       },
//     });

//     if (error) {
//       console.error(error);
//       enqueueSnackbar(error.message, { variant: 'error' });
//     } else {
//       console.log('PaymentMethod:', paymentMethod);
//       alert(`Static payment created: $${(amount / 100).toFixed(2)}`);
//     }
//   };
//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         className="p-6 bg-white rounded-md border-2 border-[#629D23]"
//       >
//         <h3 className="text-lg font-display text-[#2C3C28] font-bold mb-4">
//           Complete Your Payment
//         </h3>

//         <input
//           type="text"
//           placeholder="Cardholder Name"
//           className="w-full p-2 outline-none border-2 border-[#e8e8e8] focus:border-[#629D23] rounded mb-4"
//         />

//         <div className="border-2 border-[#e8e8e8]  p-3 rounded mb-4">
//           <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
//         </div>

//         <div className="flex items-center mb-4">
//           <input type="checkbox" id="terms" className="mr-2" />
//           <label htmlFor="terms">
//             I agree to the
//             <span className="text-blue-500">Terms and Conditions</span>
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={!stripe}
//           className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700"
//         >
//           Pay ${(amount / 100).toFixed(2)}
//         </button>

//         <p className="text-xs text-gray-500 text-center mt-2">
//           Secure payment powered by Stripe
//         </p>
//       </form>
//     </>
//   );
// };
