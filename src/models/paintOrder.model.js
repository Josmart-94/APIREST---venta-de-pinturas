
class PaintOrder {
  constructor(id, customerName, color, liters) {
    this.id = id;
    this.customerName = customerName;
    this.color = color;
    this.liters = liters;
    this.createdAt = new Date();
  }
}

module.exports = PaintOrder;
