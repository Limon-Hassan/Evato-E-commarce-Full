let express = require('express');
let router = express.Router();
const passport = require('passport');
const {
  registation,
  login,
  Adminregistation,
  alluser,
  adminUsers,
  otpVerify,
  resntOTP,
  googleLogin,
  getCurrentUser,
} = require('../../AllController/AuthController');
const authMidleware = require('../../Midleware/authMidleware');
const AdminMidleware = require('../../Midleware/AdminMidleware');
const { ErrorCheck } = require('../../Halper/ErrorCheck');

router.post('/registation', registation);
router.post('/Adminregistation', Adminregistation);
router.post('/login', ErrorCheck, login);
router.post('/otp-verify', otpVerify);
router.post('/resent-otp', resntOTP);
router.get('/me', authMidleware, getCurrentUser);
router.get('/users', authMidleware, alluser);
router.get('/adminusers', AdminMidleware, adminUsers);
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  googleLogin
);
module.exports = router;
