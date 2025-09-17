import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from './components/Navber';
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Navber2 />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/productDetails" element={<ProductDetails />}></Route>
        </Routes>
        <Page8 />
        <Fotter />
      </BrowserRouter>
    </>
  );
};

export default App;
