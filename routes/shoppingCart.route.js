const express = require('express');
const router = express.Router();

// The way you were naming your variables was not correct  
// Take a look @ this :: http://crockford.com/javascript/code.html

// Require the controllers WHICH WE DID NOT CREATE YET!!
const shoppingCartService = require('../services/shoppingCart.service');


// a simple test url to check that all of our files are communicating correctly.

router.get('/', shoppingCartService.getAllItemsInShoppingCart);

router.post('/create', shoppingCartService.createShoppingCart);

module.exports = router;