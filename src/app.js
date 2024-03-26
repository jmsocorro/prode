import express from "express";
import apiClientesRoutes from "./routes/Clientes.Routers.js";


const app = express();
const port = 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use('/api/clientes', apiClientesRoutes)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);