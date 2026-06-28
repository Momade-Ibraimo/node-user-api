# 👤 User Management API

API REST para gerenciamento de usuários, desenvolvida com Node.js e Express.

> ⚠️ **Este projeto faz parte de um sistema com dois repositórios que se comunicam. Para funcionar corretamente, a API e o Frontend precisam estar rodando na mesma máquina ao mesmo tempo.**
>
> | Repositório | Link |
> |---|---|
> | 🔧 **API (você está aqui)** | [node-user-api](https://github.com/Momade-Ibraimo/node-user-api) |
> | 🖥️ **Frontend** | [app-cadastro-usuarios](https://github.com/Momade-Ibraimo/app-cadastro-usuarios) |

---

## 📌 Sobre o projeto

Desenvolvida para praticar conceitos fundamentais de back-end com Node.js e Express. Permite o gerenciamento completo de usuários com operações CRUD, validações de entrada, tratamento de erros e middlewares.

---

## ✅ Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Atualização de dados
- Exclusão de usuários
- Validação de idade mínima (18 anos)
- Validação de parâmetros de rota
- Tratamento de erros
- Geração de IDs únicos com UUID

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Cors
- UUID
- JavaScript

---

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/users` | Lista todos os usuários |
| `POST` | `/user` | Cria um novo usuário |
| `PUT` | `/users/:id` | Atualiza um usuário |
| `DELETE` | `/users/:id` | Remove um usuário |

### Exemplo de cadastro

```json
{
  "name": "João Silva",
  "age": 25
}
```

---

## 📋 Regras de negócio

- Nome é obrigatório
- Idade é obrigatória
- Usuário deve ter idade igual ou superior a **18 anos**

---

## ⚙️ Como rodar

```bash
git clone https://github.com/Momade-Ibraimo/node-user-api
cd node-user-api
npm install
npm start
```

A API ficará disponível em `http://localhost:3002`.

> 💡 Após iniciar a API, suba também o frontend: [app-cadastro-usuarios](https://github.com/Momade-Ibraimo/app-cadastro-usuarios)

---

## 🧠 Conceitos praticados

- APIs REST e CRUD completo
- Middlewares
- Status HTTP
- Tratamento de erros
- Validação de dados
- Manipulação de arrays e objetos
- UUID

---

## 🎯 Objetivo

Consolidar conhecimentos em Node.js, Express e desenvolvimento de APIs REST com boas práticas de validação e organização de código... 
