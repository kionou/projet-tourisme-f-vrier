const db = require("../database/database");



const data = class{
// static selection = (base)=>{
    // return  db.query(`SELECT * FROM clients WHERE id = ${req.params.id}`,
    
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
// }

static insertion = (into)=>{
    console.log(into);
    let{nom,prenom,email,numero,ville} = into
        let sql= "INSERT INTO `clients`(`nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?)"; 
    return  db.query(sql,[nom,prenom,email,numero,ville],(err,res)=>{
            if (!err) {
                console.log("rrrrrrrrttttyyuiuui",result);
                // res.redirect(`reservation/message/id/${result.insertId}`)
            } else {
                console.log(err);
                return {error:err};
            }
        })
}
}

module.exports= data;