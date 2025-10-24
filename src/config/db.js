import mysql from 'mysql2';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../api/.env') })

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao MySQL:', erro);
    return;
  }
  console.log('✅ Conectado ao MySQL com sucesso!');
});

export default connection;
