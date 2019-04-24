const Menu = require('../models/menu.model');

//Simple version, without validation or sanitation

exports.menu_create = function (req, res) {
    let menu = new Menu(
        {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    );

    menu.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Menu Created successfully')
    })
};

exports.menu_all = function (req, res) {
    Menu.find(req.params.id , function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.menu_details = function (req, res) {
    Menu.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.menu_update = function (req, res) {
    Menu.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, menu) {
        if (err) return next(err);
        res.send('Menu udpated.');
    });
};

exports.menu_delete = function (req, res) {
    Menu.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
