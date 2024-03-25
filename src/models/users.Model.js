import { Sequelize, DataTypes } from "sequelize";

export default (Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      UsuarioID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "UsuarioID",
      },
      Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Nombre", // Specify the actual column name in the database
      },
      Apellido: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Apellido",
      },
      Nick: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Nick",
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Celular: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Celular",
      },
      ClienteID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "ClienteID",
        references: {
          model: "Cliente", // Assuming the client model name is 'Cliente'
          key: "ClienteID",
        },
      },
      GrupoID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "GrupoID",
      },
      Clave: {
        type: DataTypes.STRING(32),
        allowNull: true,
        field: "Clave",
      },
      Estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      Perfil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 4,
      },
      Alta: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      Modificacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      tableName: "prodeusuarios", // Specify the actual table name
      timestamps: false, // Disable automatic timestamps since they are not defined in the table
    }
  );

  // Optional: Define associations with other models (e.g., Cliente)
  // User.hasOne(Cliente, { foreignKey: 'clientId' });

  return User;
};
