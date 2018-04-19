var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Connected!");
    var sql ='select from pedido where data=CURDATE()';
    con.query(sql,[[,estado,data,obver,utente,episodio,especialidade]],function (err, result) {
        if (err) {res.send("Error");console.log(err)}
        else{res.send(result);}
    });
});

module.exports = router;
