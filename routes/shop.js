const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

<<<<<<< HEAD
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

=======
router.get('/cart', shopController.getCart);

>>>>>>> 54601740f8495a1266610554bfd5d0c55b33cbdb
router.get('/checkout', shopController.getCheckout);

module.exports = router;
