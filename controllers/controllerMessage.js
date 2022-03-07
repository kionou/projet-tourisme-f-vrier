
const { request , response} = require("express");
const db = require("../database/database");
const data = require("../requet/requet");


const msg = class{
    static message =(req=request,res=response) =>{
        
           console.log("eeerghhj",req.query.id);

            db.query(`SELECT * FROM clients WHERE id = ${req.params.id}`, (err,resultat)=>{
                    // console.log("rfrfederrfrfdre",resultat);
                    if (err) {
                     console.log(err);
                    
                         }else{
                          res.render('../views/message', {resultat})
                        //   console.log("derftthuyuu",resultat);
                         }
                  })
                
          
    }

    static reservation =  (req=request,res=response)=>{
        console.log(req.body,"aaaaaaaa");
        console.log(req.params.id);
       data.insertion(req.body)
        res.redirect(`reservation/message/id`)
        
        
    }
}

module.exports = msg