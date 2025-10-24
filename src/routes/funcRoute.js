
const express = require('express');
const router = express.Router();

const FuncController = require('../controllers/funcController.js');

router.get('/createFunc', (req,res) => {
    res.send(`
        <form action="/createFunc" method="POST">
          <label for="nome">Nome:</label>
          input type="text" id="nome" name="nome" required><br><br>
      
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required><br><br>

         <button type="submit">Cadastrar funcionário</button>
    </form>
 `);
});

router.post('/createFunc', (req, res) => {
    const {nome, email} = req.body;
    console.log('Funcionário cadastrado:', {nome, email});

    res.send(`Funcionário ${nome} criado com sucesso!`);
});

router.get('/getAllFunc', FuncController.getAllFunc);

