const express = require('express');
const router = express.Router();

// The way you were naming your variables was not correct  
// Take a look @ this :: http://crockford.com/javascript/code.html

// Require the controllers WHICH WE DID NOT CREATE YET!!
const menuService = require('../services/menu.service');


// a simple test url to check that all of our files are communicating correctly.

router.get('/', menuService.getAllItemsInMenu);

router.post('/create', menuService.createMenu);

router.get('/:id', menuService.getMenuDetails);

router.put('/:id/update', menuService.updateMenu);

router.delete('/:id/delete', menuService.deleteItemFromMenu);

module.exports = router;