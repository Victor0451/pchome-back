const express = require("express");
const router = express.Router();
const servicios = require("../models/servicios");

// LISTADOS CLIENTES

router.get("/listado", (req, res, next) => {
    servicios
        .findAll()
        .then((clientes) => {
            res.status(200).json(clientes);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


// Servicios Clientes By ID

router.get("/servicioscliente/:id", (req, res, next) => {

    servicios
        .findAll({
            where: { idcliente: req.params.id },

        })
        .then((servicio) => {
            res.status(200).json(servicio);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Servicios Clientes By ID

router.get("/servicio/:id", (req, res, next) => {

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


router.post("/nuevo", (req, res) => {
    const servicio = ({ idcliente, detalle, importe, fecha, empresa, deuda } = req.body);

    servicios
        .create(servicio)
        .then((servicio) => {
            res.status(200).json(servicio);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/putestado/:id", (req, res) => {
    const { estado, deuda, pago } = req.body;
    servicios
        .update(
            {
                estado: estado,
                deuda: deuda,
                pago: pago
            },
            { where: { idservicio: req.params.id } }
        )
        .then((servicio) => {
            res.status(200).json(servicio);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
