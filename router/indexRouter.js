const express = require('express');
let router= express.Router();
const destination = require('../controllers/indexController')



router.get('/',destination.index)
router.get('/Dakar', destination.dakar)
router.get('/Somone', destination.somone)
router.get('/Saly',destination.saly)
router.get('/Joal-Fadiouth', destination.joal)
router.get('/Sine-Saloum', destination.sine)
router.get('/Popenguine-Ndayane',destination.nianing)
router.get('/contact', destination.contact)


module.exports= router