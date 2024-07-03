import Usuario from "../models/Usuarios.Model.js";
import { hashPassword, comparePassword } from "../config/utils.js";

export class UsuarioDAO {
    static async getAll() {
        console.log("DAO");
        return await Usuario.findAll();
    }
    static async addOne(data) {
        try {
            data.Clave = await hashPassword(data.Clave);
            const newRecord = await Usuario.create(data);
            return newRecord;
        } catch (error) {
            throw error;
        }
    }
    static async updateOne(data) {
        try {
            const updatedRecord = await Usuario.findByPk(data.UsuarioID);
            if (!updatedRecord) {
                throw new Error("No existe un usuario con ese ID");
            }
            if (data.Clave) {
                data.Clave = await hashPassword(data.Clave);
            }
            updatedRecord.set(data);
            await updatedRecord.save();
            return updatedRecord;
        } catch (error) {
            throw error;
        }
    }
    static async deleteOne({ UsuarioID }) {
        try {
            const deletedRecord = await Usuario.findByPk(UsuarioID);
            if (!deletedRecord) {
                throw new Error("No existe un usuario con ese ID");
            }
            await deletedRecord.destroy();
            return deletedRecord;
        } catch (error) {
            throw error;
        }
    }
    static async findbyid(data) {
        try {
            const updatedRecord = await Usuario.findByPk(data);
            if (!updatedRecord) {
                throw new Error("No existe un usuario con ese ID");
            }
            updatedRecord.set(data);
            await updatedRecord.save();
            return updatedRecord;
        } catch (error) {
            throw error;
        }
    }
}
