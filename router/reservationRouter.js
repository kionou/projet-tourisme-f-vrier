const express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
const db = require('../database/database');
 const { check ,validationResult} = require('express-validator');
let jsonParser= bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({extended:false})



router.get('/',(req,res) =>{
    res.render('../views/reservation')
})


router.get('/message',(req,res) =>{
  res.render('../views/message')
})


router.get('/message', (req,res) =>{
  db.query(SELECT * FROM `clients`, (err,resultat)=>{
          console.log(resultat);
          if (err) {
           console.log(err);
          
               }else{
                res.render('../views/message', {resultat})
                console.log("derftthuyuu",resultat);
               }
        })
      
})


router.post('/', urlencodedParser , [
    check('nom','le nom ne doit pas être vide').exists().isLength({min: 3}),
    check('prenom','le prennom ne doit pas être vide').exists().isLength({min: 3}),
    check('email','le email ne doit pas être vide').isEmail().normalizeEmail(),
    check('numero','le numero ne doit pas être vide').isMobilePhone().isLength({min:10,max: 10}),
] , (req,res)=>{
    
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    
  const alert = errors.array()
  res.render('reservation',{
    alert
  })  
  } else {

    // res.redirect('/message')
    
    let{nom,prenom,email,numero,ville} = req.body
    let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
    db.query(sql,[nom,prenom,email,numero,ville],(err,result)=>{
        if (!err) {
            console.log("rrrrrrrrttttyyuiuui",result);
            res.redirect('/message')
           
      
        } else {
            console.log(err);
        }
    })
  }
  
})



module.exports = router