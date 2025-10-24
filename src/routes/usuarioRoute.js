import express from 'express';
import { criarUsuarioCli  } from '../models/usuarioModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

//pagina para registro
router.get('/registroCli', async (req, res)=>{
    res.render('registro');
});

//envio dos dados da pagina registro
router.post('/registroCli', async (req, res) => {
    const {nome, email, senha} = req.body;
    try {
     //   await criarUsuarioCli(nome, email, senha);
     //   res.redirect('/loginCli');
    } catch (erro){
        console.error('Erro ao criar usuário:', erro)
        res.status(500).send('Erro no registro');
    }
})

//pagina de login
//router.get('/loginCli', (req, res) => {
 //   res.render('loginCli');
//});

//envia os dados de login
//router.post('loginCli', async (req, res)=>{
  //  const {email, senha} = req.body;
    //verificação de senha
    //const senhaCorreta = await bcrypt.compare(senha, criarUsuarioCli.senha);
    //if (!senhaCorreta){
    //    return res.status(400).send('senha incorreta');
    //}
    //res.send(`Bem-vindo, ${usuario.nome}!`)
//});

export default router;