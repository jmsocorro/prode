import Usuario from "../models/Usuarios.Model.js";
import CustomError from "../utils/errors/customErrors.js";
import EErrors from "../utils/errors/enums.js";
import { hashPassword, comparePassword } from "../utils/utils.js";

export class UsuarioDAO {
  static async getAll() {
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
      const foundRecord = await Usuario.findByPk(data);
      if (!foundRecord) {
        const Error = CustomError.createError({
          name: "ID inexistente",
          cause: "ID inexistente",
          code: EErrors.NOT_FOUND,
          message: "ID inexistente",
        });
        throw Error;
      }
      return foundRecord;
    } catch (error) {
      throw error;
    }
  }
  static async findbyuuid(data) {
    try {
      const foundRecord = await Usuario.findOne({ where: { UUID: data } });
      if (!foundRecord) {
        const Error = CustomError.createError({
          name: "UUID inexistente",
          cause: "UUID inexistente",
          code: EErrors.NOT_FOUND,
          message: "UUID inexistente message",
        });
        throw Error;
      }
      return foundRecord;
    } catch (error) {
      throw error;
    }
  }
  static async findmailpass(data) {
    try {
      const foundRecord = await Usuario.findOne({
        where: { email: data.email },
      });
      if (!foundRecord) {
        const Error = CustomError.createError({
          name: "Correo inexistente",
          cause: "Correo inexistente",
          code: EErrors.NOT_FOUND,
          message: "Correo inexistente",
        });
        throw Error;
      }
      const claveOK = await comparePassword(data.Clave, foundRecord.Clave);
      if (!claveOK) {
        const Error = CustomError.createError({
          name: "Clave incorrecta",
          cause: "Clave uncorrecta",
          code: EErrors.AUTHORIZATION_REQUIRED,
          message: "Clave incorrecta",
        });
        throw Error;
      }
      return foundRecord;
    } catch (error) {
      throw error;
    }
  }
}
