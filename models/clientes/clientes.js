const Sequelize = require("sequelize");
const db = require("../../config/db/db");

module.exports = db.pchomeSequelize.define(
  "clientes",
  {
    idcliente: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    domicilio: {
      type: Sequelize.DataTypes.STRING,
    },
    telefono: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "clientes",
  }
);
