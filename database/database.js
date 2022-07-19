// let mysql = require('mysql')

// let db = mysql.createConnection({
    
//     host:'192.168.64.2',
//     user:'test',
//     password:'12345',

//     host:'localhost',
//     user:'root',
//     password:'',

//     database:'tourisme',
// });

const  Sequelize  = require("sequelize")
let sequelize = new Sequelize("tourisme","postgres","nan2021",{
    dialect:'postgres',
    host:'localhost',
    port:'5432'
})

module.exports=sequelize;
