import express from "express";
import { ProdeCLienteController } from "./controllers/ProdeCLientes.Controller.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.get("/prodeclientes", ProdeCLienteController.list);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);