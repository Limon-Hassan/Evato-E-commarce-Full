const categorySchema = require('../Model/categorySchema');
let cloudinary = require('../Halper/Cloudinary');
let { getIO } = require('../socket_server');
const productScema = require('../Model/productScema');

async function addCategory(req, res, next) {
  let { name, discription } = req.body;

  let imageUrls =
    req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];
  if (!name || !discription) {
    return res.status(400).json({ msg: 'Please Enter all the fields !' });
  }
  try {
    let category = new categorySchema({
      name,
      discription,
      image: imageUrls,
    });
    await category.save();
    getIO().emit('categoryCreated', category);
    return res
      .status(200)
      .json({ msg: 'category added successfully !', data: category });
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server error' });
  }
}

async function ReadCategory(req, res, next) {
  let { id } = req.query;
  try {
    if (id) {
      let singleCategory = await categorySchema.findById(id);
      let totalProducts = await productScema.countDocuments({
        singleCategory: id,
      });
      let categoryObj = singleCategory.toObject();
      categoryObj.totalProducts = totalProducts;
      return res.json([categoryObj]);
    } else {
      let categories = await categorySchema.find();
      let categoriesWithCount = await Promise.all(
        categories.map(async category => {
          let totalProducts = await productScema.countDocuments({
            category: category._id,
          });
          return {
            _id: category._id,
            name: category.name,
            discription: category.discription,
            image: category.image,
            totalProducts,
          };
        })
      );
      return res.json(categoriesWithCount);
    }
  } catch (error) {
    next(error);
    return res.json({ msg: 'Server Error' });
  }
}

async function UpdateCategory(req, res, next) {
  let { id } = req.params;
  try {
    let imageUrl =
      req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];
    let { changeName, changeDiscription } = req.body;
    let updateCategory = await categorySchema.findByIdAndUpdate(
      { _id: id },
      { name: changeName, discription: changeDiscription, image: imageUrl },
      { new: true }
    );
    getIO().emit('categoryUpdated', updateCategory);
    return res.json({
      msg: 'Update Category successfully !',
      data: updateCategory,
    });
  } catch (error) {
    next(error);
    res.status(500).json({ msg: 'server Error' });
  }
}

async function DeleteCategory(req, res, next) {
  let { id } = req.params;
  try {
    let DeleteCategory = await categorySchema.findOne({ _id: id });
    if (!DeleteCategory) {
      return res.status(404).json({ msg: 'Category Not Found !' });
    }
    await DeleteCategory.deleteOne();

    let deletePromise = DeleteCategory.image.map(async url => {
      try {
        const publicId = url.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`evato_categories/${publicId}`);
      } catch (err) {
        console.error('Failed to delete image from Cloudinary:', err);
      }
    });
    await Promise.all(deletePromise);
    getIO().emit('categoryDeleted', id);
    return res.json({ msg: 'category delete successfully !', id });
  } catch (error) {
    next(error);
    return res.status(500).json({ msg: 'server Error' });
  }
}

module.exports = { addCategory, ReadCategory, UpdateCategory, DeleteCategory };
