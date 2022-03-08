const { promiseImpl } = require("ejs");
const db = require("../database/database");



const data = class{
static selection = (req)=>{
        return new Promise((resolve,reject)=>
        db.query(`SELECT * FROM clients WHERE id = ${req.params.id}`, (err,resultat)=>{   
            if (err) {
            console.log(err);
            reject(err)
                 }else{
                 console.log(resultat);
                 resolve(resultat)
              
                 }
          }))    
}

static insertion = (into)=>{
    console.log(into);
    let{nom,prenom,email,numero,ville} = into
        let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
        
    return new Promise((resolve,reject)=>
    db.query(sql,[nom,prenom,email,numero,ville],(err,res)=>{
        if (!err) {
            // console.log("rrrrrrrrttttyyuiuui",res);
            console.log(res.insertId);
          resolve(res)
        } else {
            console.log(err);
            reject(err)
        }

    }))
       
       
}
}

module.exports= data;