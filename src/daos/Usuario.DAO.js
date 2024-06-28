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
            console.log(data.Clave);
            const newRecord = await Usuario.create(data);
            return newRecord;
        } catch (error) {
            throw error;
        }
    }
    static async deleteOne({UsuarioID}) {
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
}
