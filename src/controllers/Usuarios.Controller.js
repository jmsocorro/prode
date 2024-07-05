import { UsuarioRepository } from "../repositories/Usuarios.Repository.js";
import { createLogger } from "../utils/utils.js";

const logger = createLogger();

export class UsuarioController {
    static async getAll(req, res, next) {
        try {
            const usuarios = await UsuarioRepository.getAll();
            res.status(200).json(usuarios);
        } catch (error) {
            next (error);
        }
    }
    static async addOne(req, res, next) {
        const newRecord = req.body;
        try {
            const usuario = await UsuarioRepository.addOne(newRecord);
            res.status(200).json(usuario);
        } catch (error) {
            next (error);
        }
    }
    static async updateOne(req, res, next) {
        const updatedRecord = req.body;
        try {
            const usuario = await UsuarioRepository.updateOne(updatedRecord);
            res.status(200).json(usuario);
        } catch (error) {
            next (error);
        }
    }
    static async findbyuuid(req, res, next) {
        const uuid = req.params.uuid;
        try {
            const usuario = await UsuarioRepository.findbyuuid(uuid);
            res.status(200).json(usuario);
        } catch (error) {
            next (error);
        }
    }
    static async findmailpass(req, res, next) {
        const mailpass = req.body;
        try {
            const usuario = await UsuarioRepository.findmailpass(mailpass);
            res.status(200).json(usuario);
        } catch (error) {
            next (error);
        }
    }
    static async deleteOne(req, res, next) {
        const deleteRecord = req.body;
        try {
            const usuarioborrado = await UsuarioRepository.deleteOne(
                deleteRecord,
            );
            res.status(200).json(usuarioborrado);
        } catch (error) {
            next (error);
        }
    }
}
