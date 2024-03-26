import ProdeCliente from "../models/ProdeClientes.Model.js";

export class ProdeClienteDAO {
    static async getAll() {
        return await ProdeCliente.findAll();
    }
}
