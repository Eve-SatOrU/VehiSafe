const express = require('express');
const path = require('path');
const { cars } = require('./simulate-cars');

const app = express();
const port = 3000;

let collidedCars = [];



app.set("view engine", "pug");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { cars, collidedCars });
//   log
    console.log(collidedCars);
  collidedCars = []; // Reset collided cars array
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
