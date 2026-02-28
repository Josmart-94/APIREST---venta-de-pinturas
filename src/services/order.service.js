
const backlogRepo = require('../repositories/backlog.repository');
const PaintOrder = require('../models/paintOrder.model');
const { v4: uuidv4 } = require('uuid');

class OrderService {

  createOrder(customerName, color, liters) {
    const order = new PaintOrder(uuidv4(), customerName, color, liters);
    backlogRepo.insert(order);
    return order;
  }

  getAll() {
    return backlogRepo.getAll();
  }

  getById(id) {
    return backlogRepo.findById(id);
  }

  deleteById(id) {
    return backlogRepo.deleteById(id);
  }
}

module.exports = new OrderService();
