import { Router } from "express";
import { ClienteController } from "../controllers/Clientes.Controller.js";

const router = Router();
router.get("/", ClienteController.getAll);
router.post("/nuevo", ClienteController.addOne);

export default router;
