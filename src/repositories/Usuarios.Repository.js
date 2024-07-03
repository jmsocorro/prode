import { UsuarioDAO } from "../daos/Usuario.DAO.js";

export class UsuarioRepository {
    static async getAll() {
        try {
            console.log("repository");
            return await UsuarioDAO.getAll();
        } catch (error) {
            throw error;
        }
    }
    static async addOne(data) {
        try {
            return await UsuarioDAO.addOne(data);
        } catch (error) {
            throw error;
        }
    }
    static async updateOne(data) {
        try {
            return await UsuarioDAO.updateOne(data);
        } catch (error) {
            throw error;
        }
    }
    static async deleteOne(data) {
        try {
            return await UsuarioDAO.deleteOne(data);
        } catch (error) {
            throw error;
        }
    }
    static async findbyuuid(data) {
        try {
            return await UsuarioDAO.findbyuuid(data);
        } catch (error) {
            throw error;
        }
    }
}
