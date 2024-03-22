import express from "express";

const app = express()

app.get('/', (req, res) =>{
    res.send('Hola!')
})

app.listen(8080, () => console.log('Server Up'))