const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

<<<<<<< HEAD
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

=======
>>>>>>> 54601740f8495a1266610554bfd5d0c55b33cbdb
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};


exports.getCart = (req, res, next) => {
  res.render('shop/cart',{
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

<<<<<<< HEAD
exports.getOrders = (req, res, next) => {
  res.render('shop/orders',{
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

=======
>>>>>>> 54601740f8495a1266610554bfd5d0c55b33cbdb
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};