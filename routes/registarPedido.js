var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('registarPedido', { title: 'Express' });
});

router.post('/', function(req, res, next) {

});

module.exports = router;
