import { ClienteDAO } from "../daos/Cliente.DAO.js";

export class ClienteRepository {
    static async getAll() {
        try {
            return await ClienteDAO.getAll();
        } catch (error) {
            throw error;
        }
    }
    static async addOne(data) {
        try {
            return await ClienteDAO.addOne(data);
        } catch (error) {
            throw error;
        }
    }
    static async updateOne(data) {
        try {
            return await ClienteDAO.updateOne(data);
        } catch (error) {
            throw error;
        }
    }
    static async deleteOne(data) {
        try {
            return await ClienteDAO.deleteOne(data);
        } catch (error) {
            throw error;
        }
    }
}
