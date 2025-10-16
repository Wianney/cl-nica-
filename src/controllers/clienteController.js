const clienteModel = require('../models/clienteModel');

const path = require('path');

const paginaInicial = (req, res) => {
    res.sendFlile(path.join(__dirname, '..', 'view', 'index.html'));
};

module.exports = {paginaInicial};

const getAllClientes = (req, res) => {
    const clientes = clienteModel.getAllClientes();
    res.status(200).json(clientes); 
};


module.exports = {
    getAllClientes,
}