import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Navber from './components/Navber';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import HomePage from './Pages/HomePage';
import Navber2 from './components/Navber2';
import Fotter from './components/Fotter';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Account from './Pages/Account';
import OrderDetails from './Pages/OrderDetails';
import ProductDetails from './Pages/ProductDetails';
import Page8 from './components/Page8';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import SentOTP from './Pages/SentOTP';

const stripePromise = loadStripe('pk_test_1234567890');

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navber />
      <Navber2 />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Send_OTP" element={<SentOTP />} />
        <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          }
        />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
      </Routes>

      {location.pathname !== '/' && <Page8 />}

      <Fotter />
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Layout />
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
