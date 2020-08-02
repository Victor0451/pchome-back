const Sequelize = require("sequelize");
const db = require("../config/db/db");

module.exports = db.pchomeSequelize.define(
  "pagos",
  {
    idpagos: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    idcliente: {
      type: Sequelize.DataTypes.INTEGER,
    },
    importe: {
      type: Sequelize.DataTypes.INTEGER,
    },
    deuda: {
      type: Sequelize.DataTypes.INTEGER,
    },
    total: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "pagos",
  }
);
