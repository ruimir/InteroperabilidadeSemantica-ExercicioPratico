var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "python",
    password: "Python1!",
    database: "pedidos"
});

router.get('/', function(req, res, next) {
    console.log("Connected!");
    var sql ='select * from pedido where data=CURDATE()';
    con.query(sql,function (err, result) {
        if (err) {res.send("Error");console.log(err)}
        else{res.send(result);}
    });
});



module.exports = router;
