
const { request , response} = require("express");
const data = require("../requet/requet");


const msg = class{
    static message =(req=request,res=response) =>{
        data.selection(req).then(suc=>{
            res.render('../views/message', {suc})
        }).catch(err=>{
            console.log(err);
            res.redirect('/error404')
        })              
    }

    static reservation =  (req=request,res=response)=>{
        console.log(req.body,"aaaaaaaa");
         data.insertion(req.body).then(succes=>{
            res.redirect(`reservation/message/${succes.insertId}`)
         }).catch(err=>{
            res.redirect(`/error404`)
         })
        
        
        
        
    }
}

module.exports = msg