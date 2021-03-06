const Sequelize = require("sequelize");
const db = require("../config/db/db");

module.exports = db.pchomeSequelize.define(
  "servicios",
  {
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idcliente: {
      type: Sequelize.DataTypes.INTEGER,
    },
    detalle: {
      type: Sequelize.DataTypes.STRING,
    },
    importe: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    estado: {
      type: Sequelize.DataTypes.INTEGER,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
    deuda: {
      type: Sequelize.DataTypes.INTEGER,
    },
    pago: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicios",
  }
);
