const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const menu_controller = require('../controllers/menu.controller');


// a simple test url to check that all of our files are communicating correctly.

router.get('/', menu_controller.menu_all);

router.post('/create', menu_controller.menu_create);

router.get('/:id', menu_controller.menu_details);

router.put('/:id/update', menu_controller.menu_update);

router.delete('/:id/delete', menu_controller.menu_delete);

module.exports = router;