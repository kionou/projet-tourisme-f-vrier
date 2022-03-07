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

static insertion = (into,result)=>{
    console.log(into);
    let{nom,prenom,email,numero,ville} = into
        let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
   
          db.query(sql,[nom,prenom,email,numero,ville],(err,res)=>{
            if (!err) {
                console.log("rrrrrrrrttttyyuiuui",res);
                console.log(res.insertId);
                return {result:res.insertId}
            } else {
                console.log(err);
                return {error:err};
            }
        })
}
}

module.exports= data;