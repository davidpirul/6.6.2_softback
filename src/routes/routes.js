const express = require('express');
const indexControl = require('../controlador/controlador.js');
const router = express.Router();

router.get('/usuarios', indexControl.show)
router.post('/usuarios', indexControl.create)
router.post('/login', indexControl.login)

module.exports = { router };