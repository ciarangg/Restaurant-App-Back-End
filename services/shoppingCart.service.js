const ShoppingCart = require('../models/shoppingCart.model');

//Simple version, without validation or sanitation

exports.createShoppingCart = function (req, res) {
    // You can use object destructuring in order to pull variables out of the req.body object
    // more info on obj destructuring :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { time, price, content } = req.body;
    
    let shoppingCart = new ShoppingCart(
        {
            time,
            price,
            content,
        }
    );

    shoppingCart.save(function (err) {
        if (err) {
            throw new Error(`
                There was an error attempting to create a new shopping cart item
                Error: ${err.message}
            `)
        }
        res.send('Shopping Cart Created successfully')
    })
};

exports.getAllItemsInShoppingCart = async function (req, res) {
    await ShoppingCart.find({}, function (err, shoppingCart) {
        if (err) return next(err);
        res.send(shoppingCart);
    });
};

exports.getShoppingCartDetails = function (req, res) {
    ShoppingCart.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.updateShoppingCart = function (req, res) {
    ShoppingCart.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, shoppingCart) {
        if (err) return next(err);
        res.send('Shopping Cart udpated.');
    });
};

exports.deleteItemFromShoppingCart = function (req, res) {
    ShoppingCart.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
