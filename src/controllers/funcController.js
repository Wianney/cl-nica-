const funcModel = require('../models/clienteModels.js');

const path = require('path');

const paginaInicial = (req, res) => {
    res.sendFlile(path.join(__dirname, '..', 'view', 'index.html'));
};

module.exports = {paginaInicial};

const getAllFunc = (req, res) => {
    const funcs = funcModel.getAllFunc();
    res.status(200).json(funcs); 
};


module.exports = {
    getAllFunc,
}