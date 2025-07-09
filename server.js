import express from "express";
import { PrismaClient } from "./generated/prisma/client.js"; // Importa o Prisma Client gerado
const prisma = new PrismaClient();

const app = express();
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON
const users = [];

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      id: req.body.id, // Obtém o id do usuário do corpo da requisição
      email: req.body.email, // Obtém o email do usuário do corpo da requisição
      name: req.body.name, // Obtém o nome do usuário do corpo da requisição
      age: req.body.age, // Obtém a idade do usuário do corpo da requisição
    },
  });

  users.push(req.body); // Adiciona o usuário enviado no corpo da requisição ao array users
  console.log(users); // Exibe o array de usuários no console
  res.send("Usuario registrado com sucesso!"); // Envia uma resposta de sucesso
});

app.get("/usuarios", async (req, res) => {
  let users = []; // Busca todos os usuários no banco de dados usando Prisma

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name, // Filtra os usuários pelo nome se fornecido na query string
        email: req.query.email, // Filtra os usuários pelo email se fornecido na query string
        age: req.query.age, // Filtra os usuários pela idade se fornecida na query string
      },
    });
  } else {
    users = await prisma.user.findMany(); // Obtém todos os usuários do banco de dados
  }

  res.status(200).json(users); // Define o status da resposta como 200 OK
});

app.put("/usuarios/:id", async (req, res) => {
  console.log(req); // Exibe o id do usuário a ser editado no console

  await prisma.user.update({
    where: {
      id: req.params.id, // Obtém o id do usuário a ser editado dos parâmetros da rota
    },
    data: {
      id: req.body.id, // muda o id do usuário
      email: req.body.email, // muda o email do usuário
      name: req.body.name, // muda o nome do usuário
      age: req.body.age, //  muda a idade do usuário
    },
  });
  res.status(201).json(req.body); // Envia a resposta com o corpo da requisição como JSON
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id, // Obtém o id do usuário a ser deletado dos parâmetros da rota
    },
  });

  res.status(200).send(); // Envia uma resposta de sucesso sem conteúdo (204 No Content)
  console.log(`Usuario com id ${req.params.id} deletado com sucesso!`);
});

app.listen(3000);

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
