const express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
const db = require('../database/database');
 const { body ,validationResult} = require('express-validator');
let jsonParser= bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({extended:false})



router.get('/',(req,res) =>{
    res.render('../views/reservation')
})


router.post('/', urlencodedParser , [
    body('nom','le nom ne doit pas être vide').exists().isLength({min: 3}),
    body('prenom','le prennom ne doit pas être vide').exists().isLength({min: 3}),
    body('email','le email ne doit pas être vide').isEmail().normalizeEmail(),
    body('numero','le numero ne doit pas être vide').isMobilePhone().isLength({min:10,max: 10}),



] , (req,res)=>{
    
  const errors = validationResult(req)
if (!errors.isEmpty()) {
  console.log("gvfvfcfgcgfcgf",errors);
  const alert = errors.array()
  res.render('reservation',{
    alert
  })  
}


   
    // let{nom,prenom,email,numero,ville} = req.body
    // let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
    // db.query(sql,[nom,prenom,email,numero,ville],(err,result)=>{
    //     if (!err) {
    //         console.log(result);
           
      
    //     } else {
    //         console.log(err);
    //     }
    // })
})

module.exports = router