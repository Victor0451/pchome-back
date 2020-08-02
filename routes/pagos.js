const express = require("express");
const router = express.Router();
const pagos = require("../models/pagos");

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

router.get("/servicio/:id", (req, res, next) => {
    console.log(req.params.id)
    servicios
        .findOne({
            where: { idservicio: req.params.id },

        })
        .then((servicio) => {
            res.status(200).json(servicio);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Nuevo Cliente

router.post("/nuevo", (req, res) => {
    const pago = ({ idcliente, detalle, importe, fecha } = req.body);

    pagos
        .create(pago)
        .then((pago) => {
            res.status(200).json(pago);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
