const express = require('express');
const app = express();
let reservation = require("./router/inscriptionRouter");
let accueil = require("./router/indexRouter");
const sequelize = require('./database/database');


try {
    sequelize.authenticate()
        console.log('connection etabli');   
        app.set('view engine' , 'ejs')
        app.use(express.static('public'));
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use('/', accueil);
        app.use('/reservation', reservation);

    }  catch (error){
        
        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err); 
    }



app.listen(7070, ()=>{
    console.log('connection etabli sur le port 7070');
})