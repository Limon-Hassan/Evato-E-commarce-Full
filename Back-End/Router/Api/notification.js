const express = require('express');
const { ErrorCheck } = require('../../Halper/ErrorCheck');
const {
  createNotify,
  getNotify,
  ReadNotify,
} = require('../../AllController/NotificationController');
const authMidleware = require('../../Midleware/authMidleware');
const AdminMidleware = require('../../Midleware/AdminMidleware');
let router = express.Router();

router.post('/CreateNotify', ErrorCheck, authMidleware, createNotify);
router.get('/:userId', ErrorCheck, authMidleware, AdminMidleware, getNotify);
router.post('/:id/read', ErrorCheck, authMidleware, AdminMidleware, ReadNotify);

module.exports = router;
