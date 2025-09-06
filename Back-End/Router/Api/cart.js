let express = require('express');
const {
  CreateCart,
  readcart,
  CartSummery,
  IncreamentCart,
  DeleteCart,
} = require('../../AllController/CartController');
const { ErrorCheck } = require('../../Halper/ErrorCheck');
const authMidleware = require('../../Midleware/authMidleware');
let router = express.Router();

router.post('/createCart', ErrorCheck, authMidleware, CreateCart);
router.get('/readCart/:id', ErrorCheck, authMidleware, readcart);
router.get('/CartSummery/:id', ErrorCheck, authMidleware, CartSummery);
router.put('/Increament/:id', ErrorCheck, authMidleware, IncreamentCart);
router.delete('/DeleteCart/:id', ErrorCheck, authMidleware, DeleteCart);

module.exports = router;
