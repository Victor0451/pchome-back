const express = require("express");
const router = express.Router();
const clientes = require("../models/clientes");

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
  console.log(req.params.id)
  clientes
    .findOne({
      where: { idcliente: req.params.id },

    })
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Nuevo Cliente

router.post("/nuevo", (req, res) => {
  const cliente = ({ apellido, nombre, dni, domicilio, telefono, alias } = req.body);

  clientes
    .create(cliente)
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Editar Cliente

router.put("/editar/:id", (req, res) => {
  const { apellido, nombre, dni, domicilio, telefono, alias } = req.body;

  clientes
    .update(
      {
        apellido: apellido,
        nombre: nombre,
        dni: dni,
        domicilio: domicilio,
        telefono: telefono,
        alias: alias
      },
      { where: { idcliente: req.params.id } }
    )
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Delete Clientes By ID

router.delete("/eliminarcliente/:id", (req, res, next) => {
  console.log(req.params.id)
  clientes
    .destroy({
      where: { idcliente: req.params.id },

    })
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
