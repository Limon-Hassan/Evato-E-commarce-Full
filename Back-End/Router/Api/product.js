let express = require('express');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../../Halper/Cloudinary');

const {
  Createproducts,
  readProduct,
  updateProducts,
  DeleteProduct,
} = require('../../AllController/productController');
const { ErrorCheck } = require('../../Halper/ErrorCheck');
const { searchProducts } = require('../../AllController/searchController');
const {
  makeReviews,
  getReviews,
} = require('../../AllController/reviewController');
const AdminMidleware = require('../../Midleware/AdminMidleware');
const authMidleware = require('../../Midleware/authMidleware');
let router = express.Router();
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'evato_Photos',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'],
  },
});

const ProductPhoto = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
});

router.post(
  '/Createproduct',
  ProductPhoto.array('photo', 12),
  ErrorCheck,
  AdminMidleware,
  Createproducts
);
router.post('/CreateReviews', ErrorCheck, authMidleware, makeReviews);
router.get('/getReviews', ErrorCheck,  getReviews);
router.get('/product/search', ErrorCheck, searchProducts);
router.get('/GetProducts', ErrorCheck, readProduct);
router.patch(
  '/updateProduct/:id',
  ProductPhoto.array('photo', 12),
  ErrorCheck,
  AdminMidleware,
  updateProducts
);
router.delete('/Deleteproduct/:id', ErrorCheck, AdminMidleware, DeleteProduct);
module.exports = router;
