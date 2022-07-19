
const { request , response} = require("express");
const data = require("../requet/requet");


const msg = class{
    static reserver = (req=request,res=response) =>{
            res.render('../views/reservation')   
    }

    static message = async (req=request,res=response) =>{
     let affiche = await   data.selection(req.params.id)
     if (affiche.success) {
        res.render('../views/message', {"suc":affiche.success})
     } else {
        console.log(affiche.erreur);
        res.redirect('/error404')
     }
                 
    }

    static reservation = async (req=request,res=response)=>{
        let user = await data.InsertionUser(req.body)
        if (user.success ) {
            res.redirect(`reservation/message/${user.success.id}`)
            
        } else {
            res.redirect(`/error404`)
            
        }


    }
}

module.exports = msg