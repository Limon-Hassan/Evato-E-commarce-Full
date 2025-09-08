let express = require('express');
let router = express.Router();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../../Halper/Cloudinary');
const {
  addCategory,
  ReadCategory,
  UpdateCategory,
  DeleteCategory,
} = require('../../AllController/categoryController');
const { ErrorCheck } = require('../../Halper/ErrorCheck');
const AdminMidleware = require('../../Midleware/AdminMidleware');
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'evato_categories',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'],
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
});
router.post(
  '/createCategory',
  upload.array('image', 12),
  ErrorCheck,
  AdminMidleware,
  addCategory
);
router.get('/getCategory', ErrorCheck, ReadCategory);
router.patch(
  '/UpdateCategory/:id',
  upload.array('image', 12),
  ErrorCheck,
  AdminMidleware,
  UpdateCategory
);
router.delete(
  '/DeleteCategory/:id',
  ErrorCheck,
  AdminMidleware,
  DeleteCategory
);
module.exports = router;
