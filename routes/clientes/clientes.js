const express = require("express");
const router = express.Router();
const clientes = require("../../models/clientes/clientes");

// LISTADOS CLIENTES

router.get("/listado", (req, res, next) => {
  clientes
    .findAll()
    .then((clientes) => {
      res.status(200).json(clientes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Clientes By ID

router.get("/cliente/:id", (req, res, next) => {
  historia
    .findAll({
      where: { CONTRATO: req.params.id },
      order: [["FECHA", "DESC"]],
    })
    .then((historia) => {
      res.status(200).json(historia);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Nuevo Cliente

router.post("/nuevo", (req, res) => {
  const cliente = ({ apellido, nombre, dni, domicilio, telefono } = req.body);

  clientes
    .create(cliente)
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
