const express = require('express');
let router= express.Router();
const msg = require('../controllers/controllerMessage');


router.get('/',msg.reserver)
router.get('/message/:id',msg.message)
router.post('/',msg.reservation,)



module.exports = router