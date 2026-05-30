# User Management API

## Sobre o projeto

Esta aplicação foi desenvolvida para praticar conceitos fundamentais de desenvolvimento back-end utilizando Node.js e Express.

A API permite realizar o gerenciamento de usuários através de operações CRUD completas, incluindo validações de entrada, tratamento de erros e utilização de middlewares.

## Funcionalidades

* Cadastro de usuários
* Listagem de usuários
* Atualização de dados
* Exclusão de usuários
* Validação de idade mínima
* Validação de parâmetros da rota
* Tratamento de erros
* Geração de IDs únicos com UUID

## Tecnologias utilizadas

* Node.js
* Express
* Cors
* UUID
* JavaScript

## Rotas

### Listar usuários

GET /users

### Criar usuário

POST /user

### Atualizar usuário

PUT /users/:id

### Remover usuário

DELETE /users/:id

## Exemplo de cadastro

```json
{
  "name": "João Silva",
  "age": 25
}
```

## Regras de negócio

* Nome é obrigatório
* Idade é obrigatória
* Usuário deve possuir idade igual ou superior a 18 anos

## Conceitos praticados

* APIs REST
* CRUD
* Middlewares
* Status HTTP
* Tratamento de erros
* Validação de dados
* Manipulação de arrays e objetos
* UUID

## Objetivo

Consolidar conhecimentos em Node.js, Express e desenvolvimento de APIs REST utilizando boas práticas de validação e organização de código.
