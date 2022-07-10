const express = require('express');
const router = express.Router();
const gasto = require('../controllers/gastos.controller');

/* router.get("/", (req, res) => {
    res.json({status: 'API works'});
}) */

router.get('/', gasto.getGastos);

router.post('/', gasto.createGastos);

router.get('/:id', gasto.getGasto);

router.put('/:id', gasto.editGasto);

router.delete('/:id', gasto.deleteGasto);

router.get('/tipo/:id', gasto.findByType);

module.exports = router;