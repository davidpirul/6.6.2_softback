
const jwt = require('jsonwebtoken');
const { verificarUsuario, crearUsuario, mostrarUsuarios } = require('../servicios/indexService.js');

const indexControl = {

  show: async (req, res) => {
    try {
      const Authorization = req.header("Authorization")
      const token = Authorization.split("Bearer ")[1]
      jwt.verify(token, JWT_SECRET)
      const { email } = jwt.decode(token)
      const data = await mostrarUsuarios(email)
      res.send(data)
    } catch (error) {
      res.status(500).send("No es posible obtener la información solicitada");
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body
      await verificarUsuario(email, password);
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: 60 })
      res.send(token);
    } catch (err) { res.status(error.code || 500).send(err) }
  },

  create: async (req, res) => {
    try {
      const usuario = req.body
      await crearUsuario(usuario, res)
    } catch (err) { res.status(err) }
  }

}

module.exports =  indexControl