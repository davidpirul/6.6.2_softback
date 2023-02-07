const pool = require('../db/dataBase.js');
const bcrypt = require('bcryptjs');

const verificarUsuario = async (email, password) => {
  const values = [email];
  const consulta = "select * from ussuarios where email = $1";
  const { row: [usuario], rowCount } = await pool.query(consulta, values)
  if (!rowCount) throw { conde: 404, message: 'Usuario no identificado' }

  const { password: encriptacion } = usuario;
  const correctPass = bcrypt.compareSync(password, encriptacion);
  if (!correctPass || !rowCount) throw { code: 401, message: "Verificacion incorrecta, intenta nuevamente" }
};

const crearUsuario = async (email, password, rol, lenguaje) => {
  const comando = "insert into usuarios values (default, $1, $2, $3, $4)"
  const securePass = bcrypt.hashSync(password);
  const values = [email, securePass, rol, lenguaje];
  await pool.query(comando, values);
};

const mostrarUsuarios = async (email) => {
  const comando = "select * from usuarios where email = $1"
  const values = [email];
  const { row: usuario } = await pool.query(comando, values)
  return usuario
};

module.exports = { verificarUsuario, crearUsuario, mostrarUsuarios };