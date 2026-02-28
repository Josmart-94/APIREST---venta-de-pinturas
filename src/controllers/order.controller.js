
const express = require('express');
const router = express.Router();
const orderService = require('../services/order.service');

router.post('/', (req, res) => {
  const { customerName, color, liters } = req.body;

  if (!customerName || !color || !liters) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  const order = orderService.createOrder(customerName, color, liters);
  res.status(201).json(order);
});

router.get('/', (req, res) => {
  res.status(200).json(orderService.getAll());
});

router.get('/:id', (req, res) => {
  const order = orderService.getById(req.params.id);
  if (!order) return res.status(404).json({ error: "Pedido no encontrado" });
  res.status(200).json(order);
});

router.delete('/:id', (req, res) => {
  const deleted = orderService.deleteById(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Pedido no encontrado" });
  res.status(204).send();
});

module.exports = router;
