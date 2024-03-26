import Cliente from "../models/Clientes.Model.js";

export class ClienteDAO {
  static async getAll() {
    return await Cliente.findAll();
  }
  static async addOne(data) {
    try {
      const newRecord = await Cliente.create(data);
      return newRecord;
    } catch (error) {
      throw error;
    }
  }
  static async updateOne(data) {
    try {
      const newRecord = await Cliente.create(data);
      return newRecord;
    } catch (error) {
      throw error;
    }
  }
}
