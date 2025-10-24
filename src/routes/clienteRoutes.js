import express from 'express';
import { getAllClientes, createCliente } from '../models/clienteModels.js';

const router = express.Router();

//formulario de login
router.get('/loginCli', (req, res)=>{
    res.render('loginCli');
});

//receber o login do cliente(semautenticação ainda)
router.post('/loginCli', (req, res) => {
  const { email } = req.body;
  res.send(`Login realizado com o e-mail: ${email}`);
});

// 🧩 Lista todos os clientes
router.get('/', (req, res) => {
  getAllClientes((erro, clientes) => {
    if (erro) {
      console.error('Erro ao buscar clientes:', erro);
      res.status(500).send('Erro ao carregar clientes.');
    } else {
      res.render('index', { clientes }); // mostra a lista
    }
  });
});

//Mostra o formulário de cadastro
router.get('/cadastroCli', (req, res) => {
  res.render('cadastroCli'); 
});

//Recebe o formulário e cria o cliente
router.post('/cadastroCli', (req, res) => {
  const cliente = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  };

  createCliente(cliente, (erro) => {
    if (erro) {
      console.error('Erro ao criar cliente:', erro);
      res.status(500).send('Erro ao cadastrar cliente.');
    } else {
      res.redirect('/clientes'); // redireciona pra lista
    }
  });
});

export default router;
