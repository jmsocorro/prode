import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Cliente = sequelize.define(
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
      allowNull: false,
      field: "Nombre",
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    web: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "web",
      validate: {
        notEmpty: true,
        len: [2, 50],
        isUrl: true,
      },
    },
    Estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "Estado",
      defaultValue: 1,
      validate: {
        isInt: true,
      },
    },
  },
  {
    tableName: "prodeclientes",
    timestamps: false,
  }
);

export default Cliente;
