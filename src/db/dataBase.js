const { config } = require('dotenv')
const { Pool } = require('pg')
require('dotenv').config()

const baseDatos = {

	"username": process.env.DB_USER,
	"password": process.env.DB_PASSWORD,
	"database": process.env.DB_DATABASE,
	"host": process.env.DB_HOST,
	"port": process.env.DB_PORT,
	allowExitOnIddle: true

};


const pool = new Pool(baseDatos);

module.exports = pool;
