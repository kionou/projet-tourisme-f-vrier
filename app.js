const express = require('express');
const db = require('./database/database');
const app = express();
let reservation = require("./router/inscriptionRouter");
let accueil = require("./router/indexRouter")


db.connect(function(err){
    if (!err) {
        console.log('connection etabli');   
        app.set('view engine' , 'ejs')
        app.use(express.static('public'));
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use('/', accueil);
        app.use('/reservation', reservation);

    } else {
        console.log(err);
    }

})



app.listen(7070, ()=>{
    console.log('connection etabli sur le port 7070');
})