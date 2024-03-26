import { ProdeClienteRepository } from "../repositories/ProdeClientes.Repository.js";

export class ProdeCLienteController {
    static async list(req, res) {
        try {
            const prodeclientes = await ProdeClienteRepository.getAll();
            res.status(200).json(prodeclientes);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
