
const express = require('express');
const app = express();

app.use(express.json());

app.use('/orders', require('./controllers/order.controller'));

app.listen(3000, () => {
  console.log("PaintFlow API running on port 3000");
});
