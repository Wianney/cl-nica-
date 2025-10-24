const path = require('path');
const {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
} = require('..model/models/clienteModels');


const paginaInicial = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
};

const getAllClientes = (req, res) => {
    const clientes = clienteModel.getAllClientes();
    res.status(200).json(clientes); 
};

const criarCliente = (req, res) => {
    const {nome, email} = req.body;
    createCliente({nome, email}), (err,result) => {
        if (err) return res.status(500).json({erro: 'erro ao criar cliente'});
        res.status(201).json({mensagem: 'cliente cadastrado com sucesso!', id: result.InsertId});
    }
};


module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
} 