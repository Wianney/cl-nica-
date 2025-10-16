import db from '../config/db.js';

export const getAllClientes = (callback) => {
  const sql = 'SELECT * FROM clientes';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const createCliente = (cliente, callback) => {
  const sql = 'INSERT INTO clientes (nome, email) VALUES (?, ?)';
  db.query(sql, [cliente.nome, cliente.email], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};
