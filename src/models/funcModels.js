import db from '../config/db.js';

export const getAllFunc = (callback) => {
  const sql = 'SELECT * FROM funcs';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const createFunc = (func, callback) => {
  const sql = 'INSERT INTO funcs (nome, email) VALUES (?, ?)';
  db.query(sql, [func.nome, func.email], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};
