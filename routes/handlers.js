const express = require('express');
const route = express.Router();

const orm = require('../config/orm')

router.get('/', function (req, res) {
    orm.selectAll(function(error,burgers) {
        if (error) {
            return res.status(501).json({
                message: 'Not able to query the database'
            });
        }
        res.render('inbox');
    });
});

module.exports = router;