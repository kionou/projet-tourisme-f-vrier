const express = require('express');
const app = express();

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


app.listen(7070)