const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const { v4: uuidv4 } = require("uuid")

const port = 3002


//Lista de usuarios
const users = []


//MIDDLEWARE Interceptador

const CheckUser = (request, response, next) => {


    const { id } = request.params

    const index = users.findIndex(user => user.id === id)


    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    next()
}


//Rota para listar Usuarios

app.get("/users", (request, response) => {

    return response.json(users)



})

//Rota para criar usuarios

app.post("/user", (request, response) => {

    try {

        const { name, age } = request.body


        if (!name || !age) {
            return response.status(400).json({ error: "Dados Incompletos" })
        }

        if (age < 18) {
            return response.status(400).json({ error: "Idade deve ser maior que 18" })
        }
        const user = { id: uuidv4(), name, age }

        users.push(user)

        return response.status(201).json({ message: "Usuario criado com sucesso!", user })


    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error" })
    } finally {
        console.log("Requisição processada com sucesso!")

    }
})



//Rota para actualizar info do usuario

app.put("/users/:id", CheckUser, (request, response) => {

    const { id } = request.params

    const { name, age } = request.body

    const updatedUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)


    users[index] = updatedUser


    return response.json(updatedUser)

})


//Rota para deletar usuario

app.delete("/users/:id", CheckUser, (request, response) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    users.splice(index, 1)

    return response.status(204).json()

})


app.listen(port, () => {
    console.log(`Server Started on ${port}`)
})