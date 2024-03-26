import { ProdeClienteDAO } from "../daos/ProdeCliente.DAO.js";

export class ProdeClienteRepository {
  static async getAll() {
    try {
      return await ProdeCliente.getAll();
    } catch (error) {
      throw error;
    }
  }
}