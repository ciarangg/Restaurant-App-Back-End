const Menu = require('../models/menu.model');

//Simple version, without validation or sanitation

exports.createMenu = function (req, res) {
    // You can use object destructuring in order to pull variables out of the req.body object
    // more info on obj destructuring :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { title, description, price } = req.body;
    
    let menu = new Menu(
        {
            title,
            description,
            price,
        }
    );

    menu.save(function (err) {
        if (err) {
            throw new Error(`
                There was an error attempting to create a new menu item
                Error: ${err.message}
            `)
        }
        res.send('Menu Created successfully')
    })
};

exports.getAllItemsInMenu = async function (req, res) {
    await Menu.find({}, function (err, menu) {
        if (err) return next(err);
        res.send(menu);
    });
};

exports.getMenuDetails = function (req, res) {
    Menu.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.updateMenu = function (req, res) {
    Menu.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, menu) {
        if (err) return next(err);
        res.send('Menu udpated.');
    });
};

exports.deleteItemFromMenu = function (req, res) {
    Menu.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
