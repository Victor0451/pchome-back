const express = require("express");
const router = express.Router();
const pagos = require("../models/pagos");


// Historial de Pagos

router.get("/historial/:id", (req, res, next) => {

    pagos
        .findAll({
            where: { idservicio: req.params.id }
        })
        .then((servicio) => {
            res.status(200).json(servicio);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Nuevo Pago

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
