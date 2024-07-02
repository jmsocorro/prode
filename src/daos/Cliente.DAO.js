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
          const updatedRecord = await Cliente.findByPk(data.ClienteID);
          if (!updatedRecord) {
            throw new Error("No existe un cliente con ese ID");
          }
          updatedRecord.set(data);
          await updatedRecord.save();
          return updatedRecord;
        } catch (error) {
          throw error;
        }
      }
    static async deleteOne({ClienteID}) {
        try {
            const deletedRecord = await Cliente.findByPk(ClienteID);
            if (!deletedRecord) {
                throw new Error("No existe un cliente con ese ID");
            }
            await deletedRecord.destroy();
            return deletedRecord;
        } catch (error) {
            throw error;
        }
    }
    static async findbyid(data) {
        try {
          const updatedRecord = await Cliente.findByPk(data);
          if (!updatedRecord) {
            throw new Error("No existe un cliente con ese ID");
          }
          updatedRecord.set(data);
          await updatedRecord.save();
          return updatedRecord;
        } catch (error) {
          throw error;
        }
      }
}
