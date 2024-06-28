import { Router } from "express";
import { UsuarioController } from "../controllers/Usuarios.Controller.js";

const router = Router();
router.get("/", UsuarioController.getAll);
router.post("/nuevo", UsuarioController.addOne);
router.put("/", UsuarioController.updateOne);
router.delete("/", UsuarioController.deleteOne)

export default router;
