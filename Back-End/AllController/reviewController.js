const productScema = require('../Model/productScema');
const ReviewsSchema = require('../Model/ReviewsSchema');
let { getIO } = require('../socket_server');

async function makeReviews(req, res, next) {
  let { productId, rating, comment } = req.body;
  let userID = req.user.id;
  try {
    let reviews = await ReviewsSchema.create({
      user: userID,
      product: productId,
      comment,
      rating,
    });
    await productScema.findByIdAndUpdate(productId, {
      $push: { reviews: reviews._id },
      $inc: { Totoalreviews: 1 }, 
    });

    let populatedReview = await reviews.populate('user', 'name');

    getIO().to(productId.toString()).emit('reviewCreated', {
      productId,
      review: populatedReview,
    });
    res.status(200).json({
      msg: 'review added successfully',
      data: populatedReview,
    });
  } catch (error) {
    next(error);
    console.log(error.message);
  }
}

async function getReviews(req, res, next) {
  let productId = req.query.productId;
  try {
    let GetReviews = await ReviewsSchema.find({ product: productId }).populate(
      'user',
      'name'
    );

    res.json({ msg: 'reviews found', data: GetReviews });
  } catch (error) {
    next(error);
  }
}

module.exports = { makeReviews, getReviews };
