const categorySchema = require('../Model/categorySchema');
const productScema = require('../Model/productScema');
let cloudinary = require('../Halper/Cloudinary');
let { getIO } = require('../socket_server');

async function Createproducts(req, res, next) {
  let { name, discription, price, category, stock } = req.body;
  if (!name || !discription || !price) {
    return res.status(400).json({ msg: 'please Enter all the fields !' });
  }
  try {
    let photo =
      req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];

    let product = new productScema({
      name,
      discription,
      category,
      photo: photo,
      price,
      stock,
    });
    await product.save();
    if (category && category.length > 0) {
      await categorySchema.updateMany(
        { _id: { $in: category } },
        { $push: { Product: product._id } }
      );
    }
    getIO().emit('productCreated', product);
    return res
      .status(200)
      .json({ msg: 'Product added successfully !', data: product });
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server Error !' });
  }
}

async function readProduct(req, res, next) {
  let id = req.query;
  try {
    if (id) {
      let singleProduct = await productScema.findById(id).populate('category');
      return res.json(singleProduct);
    } else {
      getallproducts = await productScema.find().populate('category');
      return res.json(getallproducts);
    }
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server Error !' });
  }
}

async function topProducts(req, res, next) {
  try {
    const topProducts = await productScema
      .find()
      .sort({ sold: -1 })
      .limit(10)
      .populate({
        path: 'category',
        select: 'name discription image',
      });

    getIO().emit('topProductsUpdate', topProducts);

    res.status(200).json({
      success: true,
      data: topProducts,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProducts(req, res, next) {
  let { id } = req.params;
  let {
    ChangeName,
    ChangeDriscription,
    ChangePrice,
    ChangeCategory,
    Changestock,
  } = req.body;
  try {
    let photosURL =
      req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];
    let updateProduct = await productScema.findByIdAndUpdate(
      { _id: id },
      {
        name: ChangeName,
        discription: ChangeDriscription,
        price: ChangePrice,
        category: ChangeCategory,
        photo: photosURL,
        stock: Changestock,
      },
      { new: true }
    );

    getIO().emit('productupdated', updateProduct);
    return res.json({
      msg: 'Product update Successfully !',
      data: updateProduct,
    });
  } catch (error) {
    next(error);
    console.log(error);
    return res.status(500).json({ msg: 'server Error !' });
  }
}

async function DeleteProduct(req, res, next) {
  let { id } = req.params;
  try {
    let Deleteproducts = await productScema.findOne({ _id: id });
    if (!Deleteproducts) {
      return res.status(404).json({ msg: 'product not found !' });
    }
    await Deleteproducts.deleteOne();
    let Deletepromise = Deleteproducts.photo.map(async url => {
      try {
        const publicId = url.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`evato_Photos/${publicId}`);
      } catch (err) {
        console.error('Failed to delete image from Cloudinary:', err);
      }
    });
    await Promise.all(Deletepromise);
    getIO().emit('productDeleted', id);
    return res.json({ msg: 'Product delete successfully !', id });
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server Error !' });
  }
}

module.exports = {
  Createproducts,
  readProduct,
  updateProducts,
  topProducts,
  DeleteProduct,
};
