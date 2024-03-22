import express from "express";

const app = express()
const port = 8080

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) =>{
    res.json ({ message : "ok"})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))