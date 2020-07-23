const express = require('express');
const server = express();
const nunjucks = require("nunjucks"); // template engine
/* const Pool = require('pg').Pool // pra não ficar pedindo senha toda hora etc
const db = new Pool({
    user: 'postgres',
    password: 'xavier',
    host: '192.168.99.100',
    port: 5432,
    database: 'doe'
}); */

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

nunjucks.configure("./", {
    express:server,
    noCache: true,
});

server.get('/', function(req, res) {
    return res.render('index.html')
})

//Conexão com Database Postgres abaixo.

/* server.get("/", function(req, res) {
    
    db.query("SELECT * FROM donors", function(err, result) {
        if (err) return res.send("Erro de banco de dados.");

        const donors = result.rows;
        return res.render("index.html", { donors })
    });

});

server.post("/", function(req, res) {
    const name = req.body.name
    const email = req.body.email
    const bloodType = req.body.bloodType

    donors.push({
        name: name,
        bloodType: bloodType,
    });

    if(name == "" || email == "" || bloodType == "") {
        return res.send("Todos os campos são obrigatórios.")
    };

    const query = `
    INSERT INTO donors ("name", "email", "bloodType")
     VALUES ($1, $2, $3)`

     const values = [name, email, bloodType];

    db.query(query, values, function(err) {
        if (err) return res.send("Erro no banco de dados.")

        return res.redirect("/");
    });


});
 */
server.listen(3000);
