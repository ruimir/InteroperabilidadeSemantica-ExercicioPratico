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
    res.render('realizarExame', {title: 'Express'});
});

router.get('/addRelatorio/:idPedido', function (req, res, next) {
    res.render('addRelatorio', {title: 'Express'});
});


router.post('/addExame', function (req, res, next) {
    var idPedido = req.body.idPedido;
    var relatorio = req.body.relatorio;

    console.log("Connected!");
    var sql = 'UPDATE `pedidos`.`pedido` SET `Estado`= ?, `Relatorio`= ? WHERE `idPedido`= ?';
    con.query(sql, ["Concluído",relatorio,idPedido], function (err, result) {
        if (err) {
            res.send("Error");
            console.log(err)
        }
        else {
            res.send("Done");
        }
    });


});


router.post('/', function (req, res, next) {
    // var estado="Agendado";
    // var utente=req.body.utente;
    // var data=req.body.data;
    // var obver=req.body.obser;
    // var episodio=req.body.episodio;
    // var especialidade=req.body.especialidade;
    //
    // console.log("Connected!");
    // var sql ='INSERT INTO `pedidos`.`Pedido` (`idPedido`,`Estado`, `data`,`Observacoes`, `Doente_idDoente`, `idEpisodio`,`Especialidade`) VALUES (?)';
    // con.query(sql,[[,estado,data,obver,utente,episodio,especialidade]],function (err, result) {
    //     if (err) {res.send("Error");console.log(err)}
    //     else{res.send("Done");}
    // });


});

module.exports = router;
