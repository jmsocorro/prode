import { ClienteRepository } from "../repositories/Clientes.Repository.js";

export class ClienteController {
    static async getAll(req, res) {
        try {
            const clientes = await ClienteRepository.getAll();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async addOne(req, res) {
        const newRecord = req.body;
        try {
            const cliente = await ClienteRepository.addOne(newRecord);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async updateOne(req, res) {
        const updatedRecord = req.body;
        try {
            const cliente = await ClienteRepository.updateOne(updatedRecord);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async deleteOne(req, res) {
        const deleteRecord = req.body;
        try {
            const clienteborrado = await ClienteRepository.deleteOne(
                deleteRecord,
            );
            res.status(200).json(clienteborrado);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
