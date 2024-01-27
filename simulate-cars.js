const cars = [];

class ConnectedCar {
  constructor(id) {
    this.id = id;
    this.location = getRandomLocation();
    this.speed = getRandomSpeed();
  }

  updateData() {
    // Simulate continuous data transmission
    this.location = getRandomLocation();
    this.speed = getRandomSpeed();
  }

  simulateCollision() {
    // Simulate a collision event
    this.location = getRandomLocation();
    this.speed = 0; // Stop the car
  }
}

function getRandomLocation() {
  return {
    latitude: Math.random() * 90,
    longitude: Math.random() * 180,
  };
}

function getRandomSpeed() {
  return Math.random() * 100;
}

// Create and simulate connected cars
for (let i = 0; i < 5; i++) {
  const car = new ConnectedCar(i);
  cars.push(car);
}

// Simulate continuous data transmission
setInterval(() => {
  cars.forEach((car) => car.updateData());
}, 1000);

// Simulate a collision after 1 minute
// setTimeout(() => {
//   console.log('Simulating a collision after 1 minute...');
//   const collidedCars = [cars[0], cars[1]]; // For example, cars 1 and 2 collide
//   collidedCars.forEach((car) => car.simulateCollision());
// }, 60000);
setTimeout(() => {
    console.log('Simulating a collision after 1 minute...');
    const collidedCarIds = [0, 1]; // For example, cars 0 and 1 collide
    collidedCars = cars.filter((car) => collidedCarIds.includes(car.id));
    collidedCars.forEach((car) => car.simulateCollision());
    console.log(collidedCars ,"we stop there speed"); // Log the collided cars
  }, 60000);
  
  
module.exports = {
  cars,
};