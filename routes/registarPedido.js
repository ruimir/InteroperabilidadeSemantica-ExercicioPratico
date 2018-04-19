var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "python",
    password: "Python1!",
    database: "pedidos"
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('registarPedido', {title: 'Express'});
});

router.post('/', function (req, res, next) {
    var estado="Agendado";
    var utente=req.body.utente;
    var data=req.body.data;
    var obver=req.body.obser;
    var episodio=req.body.episodio;
    var especialidade=req.body.especialidade;

    console.log("Connected!");
    var sql ='INSERT INTO `pedidos`.`Pedido` (`idPedido`,`Estado`, `data`,`Observacoes`, `Doente_idDoente`, `idEpisodio`,`Especialidade`) VALUES (?)';
    con.query(sql,[[,estado,data,obver,utente,episodio,especialidade]],function (err, result) {
        if (err) {res.send("Error");console.log(err)}
        else{res.send("Done");}
    });


});

module.exports = router;
