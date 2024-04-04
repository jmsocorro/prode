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
  static async updateOne({ClienteID, ...data}) {
    try {
      const updatedRecord = await Cliente.findByPk(ClienteID);
      if (!updatedRecord) {
        throw new Error('No existe un cliente con ese ID')
      }
      await updatedRecord.update(data)
      return updatedRecord;
    } catch (error) {
      throw error;
    }
  }
}
