import db from '../config/db.js';

let clientes = [];

//Listar clientes

export const getAllClientes = (callback) => {
  const sql = 'SELECT * FROM clientes';
  db.query(sql, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};

export const getClienteById = (id, callback) => {
  const sql = 'SELECT * FROM clientes WHERE id = ?';
  db.query(sql, [id], (error, results) => {
    if (error) return callback(error,null);
    callback(null, results[0]);
  });
}

//Criação de cliente

export const createCliente = (cliente, callback) => {
  const sql = 'INSERT INTO clientes (nome, email, telefone, senha) VALUES (?, ?, ?, ?)';
  db.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.senha], (error, result) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, result);
  });
};

export const updateCliente = (id, cliente, callback) => {
  const sql = 'UPDATE clientes SET nome = ?, email = ?, telefone = ?,senha = ?, WHERE id = ?';
  db.query(sql, [cliente.nome, cliente.email, cliente.telefone,cliente.senha, id], (error, result) => {
    if (error) return callback(error, null);
    callback(null, result);
  });
};

