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
}
