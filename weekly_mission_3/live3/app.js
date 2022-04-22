const express = require('express')
const app = express()
const port = 3000 //LOCALHOST:30000

// localhost:3000
//request =  peticion
//respons = respuesta 
app.get('/', (req, res) => {

    res.send("Hola a todos mis explores!!! Lo quiero modificar")
})




//localhost:3000/launchx
app.get('/launchx', (req, res) => {

    res.send("Bienvenidos a lunchX")
})



app.listen(port, () => {

    console.log("Server Listo!")
})