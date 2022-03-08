const { promiseImpl } = require("ejs");
const db = require("../database/database");



const data = class{
static selection = ()=>{
  
    // return  db.query(`SELECT * FROM clients WHERE id = ${res.insertId}`,
    
    // (err,resultat)=>{
    //     console.log("rfrfederrfrfdre",resultat);
    //     if (err) {
    //      console.log(err);
    //     return {error:err}
    //          }else{
    //           res.render('../views/message', {resultat})
    //           console.log("derftthuyuu",resultat);
    //          }
    //   }
    // )
}

static insertion = (into)=>{
    console.log(into);
    let{nom,prenom,email,numero,ville} = into
        let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
        
    return new Promise((resolve,reject)=>
    db.query(sql,[nom,prenom,email,numero,ville],(err,res)=>{
        if (!err) {
            console.log("rrrrrrrrttttyyuiuui",res);
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