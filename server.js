import  express  from 'express';

const app = express();
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON


const users = []

app.post('/usuarios', (req, res) => {

    
    users.push(req.body) // Adiciona o usuário enviado no corpo da requisição ao array users
    console.log(users) // Exibe o array de usuários no console
    res.send('aqui deu certo')

})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users) // Define o status da resposta como 200 OK
    // res.send(users) // Envia a lista de usuários como resposta
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

    //Banco de Dados
    //Victor Rian
    //Vicvicvic10