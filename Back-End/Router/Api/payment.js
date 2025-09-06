let express = require('express');
const {
  createPayment,
  capturePayment,
} = require('../../AllController/paymentController');
const { ErrorCheck } = require('../../Halper/ErrorCheck');
const authMidleware = require('../../Midleware/authMidleware');
const AdminMidleware = require('../../Midleware/AdminMidleware');
let router = express.Router();

router.post('/payment', ErrorCheck, authMidleware, createPayment);
router.post(
  '/capture',
  ErrorCheck,
  authMidleware,
  AdminMidleware,
  capturePayment
);

module.exports = router;
