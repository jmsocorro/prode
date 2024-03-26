import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export default (sequelize) => {
    class ProdeCliente extends Model {
        static asociate(models) {}
    }
    ProdeCliente.init(
        {
            ClienteID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "ClienteID",
            },
            Nombre: {
                type: DataTypes.STRING(50),
                allowNull: true,
                field: "Nombre",
            },
            web: {
                type: DataTypes.STRING(50),
                allowNull: true,
                field: "web",
            },
            Estado: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: "Estado",
            },
        },
        {
            sequelize,
            modelName: "ProdeCliente",
            tableName: "prodeclientes",
            timestamps: false,
        },
    );

    return ProdeCliente;
};
/*
import sequelize from "../config/db.js";

const ProdeCliente = sequelize.define(
  "Cliente",
  {
    ClienteID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "ClienteID",
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "Nombre",
    },
    web: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "web",
    },
    Estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "Estado",
    },
  },
  {
    tableName: "prodeclientes",
    timestamps: false,
  }
);

export default ProdeCliente;
*/
