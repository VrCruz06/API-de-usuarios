import  express  from 'express';

const app = express();
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON


const users = []

app.post('/usuarios', (req, res) => {

    
    users.push(req.body)
    res.send('aqui deu certo')

})

app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(3000)



    /*
        1) Tipo de Rota / Método HTTP
        2) Endereço 

    */

    /*
        Criar nossa API de usuarios
    
        -Criar um usuario
        -Listar todos os usuarios
        -editar um usuario
        -deletar um usuario

    */