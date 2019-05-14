const User = require('../models/user.model');

//Simple version, without validation or sanitation

exports.createUser = function (req, res) {
    // You can use object destructuring in order to pull variables out of the req.body object
    // more info on obj destructuring :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { name, location, userType } = req.body;
    
    let user = new User(
        {
            name,
            location,
            userType,
        }
    );

    user.save(function (err) {
        if (err) {
            throw new Error(`
                There was an error attempting to create a new user item
                Error: ${err.message}
            `)
        }
        res.send('User Created successfully')
    })
};

exports.getAllItemsInUser = async function (req, res) {
    await User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    });
};

exports.getUserDetails = function (req, res) {
    User.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.deleteItemFromUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
