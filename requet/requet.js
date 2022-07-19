const sequelize = require('../database/database');
const { Sequelize } = require('../models');
const clients = require('../models/clients');
const client = clients(sequelize,Sequelize);



const data = class{
static selection = (into)=>{

    return new Promise(async (next)=>{
        client.findAll({where:{
            id:into
        }}).then(resultat => {
            console.log('resultat',resultat);
            next({success:resultat})
        }).catch(error  =>{
            console.log('error',error);
              next({erreur:error})
        }) 
    })

        
}




static InsertionUser=  (into)=>{
    console.log('innnto',into);
    return   client.sync({force:true}).then(()=>{
        let{nom,prenom,email,numero,ville} = into
        return new Promise(async (next)=>{
           client.create({nom,prenom,email,numero,ville})
            .then(resultat=>{
            console.log('ss',resultat);
            next({
            success:resultat
            })
        }).catch(err=>{
            console.log("eee",err);
            next ({
                erreur:err
            })
        })
    })
    }).catch(err=>{
        console.log('rrroorr',err);
    })
  
}

}

module.exports= data;