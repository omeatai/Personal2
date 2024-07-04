/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Create an object for a car
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "black",
  price: 20000,
  lightBulbON: true,
  "travel bag": {
    brand: "chanel",
    color: "black",
    straps: 2,
    compartments: 3,
    contents: {
      clothes: 5,
      shoes: 2,
      toiletries: 1,
      electronics: 1,
    },
  },

  start: function () {
    console.log("Car started");
  },

  stop: function () {
    console.log("Car stopped");
  },

  drive: function () {
    console.log("Car is moving");
  },

  toggleLights: function (lightBulbON) {
    this.lightBulbON = !this.lightBulbON;
    console.log(
      this.lightBulbON ? "Light is turned ON" : "Light is turned OFF"
    );
  },

  lightStatus: function () {
    console.log(this.lightBulbON ? "Light is ON" : "Light is OFF");
    return this.lightBulbON;
  },
};

console.log("Car", car);
console.log("Car Model", car.model);
console.log("Car Year", car.year);
console.log("Car Bulb Status", car.lightStatus());
console.log("Car Luggage contents", car["travel bag"].contents);
