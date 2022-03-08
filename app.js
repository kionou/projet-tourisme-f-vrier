const express = require('express');
const db = require('./database/database');
const app = express();
let reservation = require("./router/reservationRouter");



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/reservation', reservation);


db.connect(function(err){
    if (!err) {
        console.log('connection etabli');
       
  
    } else {
        console.log(err);
    }

})


app.set('view engine' , 'ejs')
app.use(express.static('public'));

app.get('/', (req , res) =>{
    res.render('index')
});

app.get('/contact', (req,res)=>{
 res.render('contact')  
})

app.get('/Dakar', (req,res)=>{
    res.render('destination')  
   })

app.get('/Somone', (req,res)=>{
    res.render('DestinationSomone')  
   })

app.get('/Saly', (req,res)=>{
    res.render('DestinationSaly')  
   })


   app.get('/Joal-Fadiouth', (req,res)=>{
    res.render('DestinationJoal')  
   })

   app.get('/Sine-Saloum', (req,res)=>{
    res.render('DestinationSine')  
   })

   app.get('/Popenguine-Ndayane', (req,res)=>{
    res.render('DestinationNianing')  
   })

//    app.get('/message', (req,res)=>{
//     res.render('message')  
//    })


app.listen(7070, ()=>{
    console.log('connection etabli sur le port 7070');
})