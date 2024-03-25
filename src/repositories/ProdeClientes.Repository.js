import ProdeCliente from "../models/ProdeClientes.Model.js";

class ProdeClienteRepository {
  static async getAll() {
    try {
      const clients = await ProdeCliente.findAll();
      return clients;
    } catch (error) {
      throw error;
    }
  }
}

export default ProdeClienteRepository;
