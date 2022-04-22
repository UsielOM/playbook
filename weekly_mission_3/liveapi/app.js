const express = require('express')

const app = express()

const port = 3000 //LOCALHOST:30000

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app Listening on port ${port}`)
})

//routes 
//Methods HTTP: GET, POST, PUT, DELETE // BUSCAR MAS SOBRE METHODS HTTP

app.get('/v1/explorers', (req, res) => {
    console.log(`GET EXPLORERS V1 API ${new Date()}`)

    const explorer1 = { id: 1, name: "Explorer1" }
    const explorer2 = { id: 2, name: "Explorer2" }
    const explorers = { explorer1, explorer2 }
        //HTTP CODE STATUS:200 EXITOSO 
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`GET BY ID EXPLORERS V1 API ${new Date()}`)

    const explorer1 = { id: 1, name: "Explorer1" }

    //HTTP CODE STATUS:200 EXITOSO 
    res.status(200).json(explorer1)

    //get para regresar info
})

app.post('/v1/explorers', (req, res) => {

    console.log(`POST EXPLORERS V1 API ${new Date()}`)
        //Agregar la logica para persisitir la informacion que mandan
    console.log(req.body)

    //body se guardan los parametros del req

    //HTTP CODE STATUS:200 EXITOSO 
    res.status(201).json({ message: "Creado exitosamente" })
        //post para crear 
})