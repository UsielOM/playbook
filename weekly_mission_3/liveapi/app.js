const express = require('express')

const app = express()

const port = 3000 //LOCALHOST:30000

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app Listening on port ${port}`)
})