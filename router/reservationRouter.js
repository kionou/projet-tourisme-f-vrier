const express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
const db = require('../database/database');
const { check ,validationResult} = require('express-validator/check');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false})



router.get('/',(req,res) =>{
    res.render('../views/reservation')
})


router.post('/', urlencodedParser ,(req,res)=>{
    let{nom,prenom,email,numero,ville} = req.body;
    check('nom','le nom ne doit pas être vide').exists().isLength({min: 3})
    check('prenom','le nom ne doit pas être vide') 



    console.log("gvfvfcfgcgfcgf",validationResult(req));
    // let{nom,prenom,email,numero,ville} = req.body
    let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
    db.query(sql,[nom,prenom,email,numero,ville],(err,result)=>{
        if (!err) {
            console.log(result);
           
      
        } else {
            console.log(err);
        }
    })
})

module.exports = router