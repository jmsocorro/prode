import { UsuarioRepository } from "../repositories/Usuarios.Repository.js";

export class UsuarioController {
    static async getAll(req, res) {
        try {
            const usuarios = await UsuarioRepository.getAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async addOne(req, res) {
        const newRecord = req.body;
        try {
            const usuario = await UsuarioRepository.addOne(newRecord);
            res.status(200).json(usuario);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async updateOne(req, res) {
        const updatedRecord = req.body;
        try {
            const usuario = await UsuarioRepository.updateOne(updatedRecord);
            res.status(200).json(usuario);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    static async findbyuuid(req, res) {
        const uuid = req.params.uuid;
        try {
            const usuario = await UsuarioRepository.findbyuuid(uuid);
            res.status(200).json(usuario);
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: 'Internal Server Error' });
        }
    }
    static async findmailpass(req, res) {
        const mailpass = req.body;
        try {
            const usuario = await UsuarioRepository.findmailpass(mailpass);
            res.status(200).json(usuario);
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: 'Internal Server Error' });
        }
    }
    static async deleteOne(req, res) {
        const deleteRecord = req.body;
        console.log(deleteRecord);
        try {
            const usuarioborrado = await UsuarioRepository.deleteOne(
                deleteRecord,
            );
            res.status(200).json(usuarioborrado);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
