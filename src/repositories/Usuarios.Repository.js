import { UsuarioDAO } from "../daos/Usuario.DAO.js";

export class UsuarioRepository {
    static async getAll() {
        try {
            const usuarios = await UsuarioDAO.getAll();
            const return_usuarios = usuarios.map(usuario => {
                return {
                    uuid: usuario.UUID,
                    nombre: usuario.Nombre,
                    apellido: usuario.Apellido,
                    nick: usuario.Nick,
                    email: usuario.email,
                    perfil: usuario.Perfil,
                    clienteid: usuario.ClienteID,
                    grupoid: usuario.GrupoID,
                    estado: usuario.Estado,
                    puntos: usuario.Puntos,
                    celular: usuario.Celular,
                    posicionanterior: usuario.PosicionAnterior,
                    posicionactual: usuario.PosicionActual,
                }
            });
            return usuarios;
        } catch (error) {
            throw error;
        }
    }
    static async addOne(data) {
        try {
            const usuario = await UsuarioDAO.addOne(data);
            return {
                uuid: usuario.UUID,
                nombre: usuario.Nombre,
                apellido: usuario.Apellido,
                nick: usuario.Nick,
                email: usuario.email,
                perfil: usuario.Perfil,
                clienteid: usuario.ClienteID,
                grupoid: usuario.GrupoID,
                estado: usuario.Estado,
                puntos: usuario.Puntos,
                celular: usuario.Celular,
                posicionanterior: usuario.PosicionAnterior,
                posicionactual: usuario.PosicionActual,
            }
        } catch (error) {
            throw error;
        }
    }
    static async updateOne(data) {
        try {
            const usuario = await UsuarioDAO.updateOne(data);
            return {
                uuid: usuario.UUID,
                nombre: usuario.Nombre,
                apellido: usuario.Apellido,
                nick: usuario.Nick,
                email: usuario.email,
                perfil: usuario.Perfil,
                clienteid: usuario.ClienteID,
                grupoid: usuario.GrupoID,
                estado: usuario.Estado,
                puntos: usuario.Puntos,
                celular: usuario.Celular,
                posicionanterior: usuario.PosicionAnterior,
                posicionactual: usuario.PosicionActual,
            }
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
            const usuario = await UsuarioDAO.findbyuuid(data);
            return {
                uuid: usuario.UUID,
                nombre: usuario.Nombre,
                apellido: usuario.Apellido,
                nick: usuario.Nick,
                email: usuario.email,
                perfil: usuario.Perfil,
                clienteid: usuario.ClienteID,
                grupoid: usuario.GrupoID,
                estado: usuario.Estado,
                puntos: usuario.Puntos,
                celular: usuario.Celular,
                posicionanterior: usuario.PosicionAnterior,
                posicionactual: usuario.PosicionActual,
            }
        } catch (error) {
            throw error;
        }
    }
    static async findmailpass(data) {
        try {
            const usuario = await UsuarioDAO.findmailpass(data);
            return {
                uuid: usuario.UUID,
                nombre: usuario.Nombre,
                apellido: usuario.Apellido,
                nick: usuario.Nick,
                email: usuario.email,
                perfil: usuario.Perfil,
                clienteid: usuario.ClienteID,
                grupoid: usuario.GrupoID,
                estado: usuario.Estado,
                puntos: usuario.Puntos,
                celular: usuario.Celular,
                posicionanterior: usuario.PosicionAnterior,
                posicionactual: usuario.PosicionActual,
            }
        } catch (error) {
            throw error;
        }
    }
}
