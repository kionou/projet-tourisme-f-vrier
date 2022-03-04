const express = require('express');
let router= express.Router();
const msg = require('../controllers/controllerMessage');


router.get('/',(req,res) =>{
    res.render('../views/reservation')
})


router.get('/message/:id',msg.message)


router.post('/',msg.reservation,)



module.exports = router