const equipments = require('./data/equipments.json');
const materials = require('./data/materials.json')
const purchase = require('./data/purchase_orders.json')
const sales = require('./data/sales_orders.json')
const workforce = require('./data/workforce.json')
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const port = process.env.PORT || 5000;




app.get('/equipaments', (req, res) => {
return res.json(equipments);

})
app.get('/materials', (req, res) => {
  return res.json(materials);

})

app.get('/purchase', (req, res) => {
  return res.json(purchase);

})
app.get('/sales', (req, res) => {
  return res.json(sales);

})
app.get('/workforce', (req, res) => {
  return res.json(workforce);

})

app.listen(port, () => {
  console.log(`Express started at http://localhost:${port}`)
})