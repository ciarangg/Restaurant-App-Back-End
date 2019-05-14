const express = require('express');
const router = express.Router();

// The way you were naming your variables was not correct  
// Take a look @ this :: http://crockford.com/javascript/code.html

// Require the controllers WHICH WE DID NOT CREATE YET!!
const userService = require('../services/user.service');


// a simple test url to check that all of our files are communicating correctly.

router.get('/', userService.getAllItemsInUser);

router.post('/create', userService.createUser);

router.get('/:id', userService.getUserDetails);

router.put('/:id/update', userService.updateUser);

router.delete('/:id/delete', userService.deleteItemFromUser);

module.exports = router;