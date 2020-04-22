const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/checkout')
  .get(controller.get)
  // .post(controller.post)

module.exports = router

//TODO update routes
//think about how to route to which endpoints
// probably 3 endpoints =
//1st for Signup page, 2nd for Shipping page, 3rd for Payment page