import db from '../config/db.js';
import bcrypt from 'bcrypt';

//Criação do usuario

export async function criarUsuarioCli(nome, email, senha){
    const hash = await bcrypt.hash(senha,10);
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    await db.promise().query(sql, [nome,email, hash]);

}

