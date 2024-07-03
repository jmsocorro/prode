import { Router } from "express";
import { UsuarioController } from "../controllers/Usuarios.Controller.js";

const router = Router();
router.get("/", UsuarioController.getAll);
router.get("/uuid/:uuid", UsuarioController.findbyuuid);
router.post("/nuevo", UsuarioController.addOne);
router.put("/", UsuarioController.updateOne);
router.delete("/", UsuarioController.deleteOne)

export default router;
