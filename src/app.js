import express from "express";
import passport from "passport";

import apiClientesRoutes from "./routes/Clientes.Routers.js";
import initializePassport from "./config/passport.config.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/clientes", apiClientesRoutes);

const httpserver = app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.get("/stop", (req, res) => {
  httpserver.close(() => {
    console.log("HTTP server closed");
  });
});
