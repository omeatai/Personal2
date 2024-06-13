var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

animal;

//Both animal2 and animal have same memory location
var animal2 = animal;

animal2;

animal2.deadly = true;
animal2;
animal;

// Make a copy of an object safely
animal2 = Object.assign({}, animal);
var animal3 = { ...animal };
var animal4 = JSON.parse(JSON.stringify(animal));

animal2.deadly = false;
animal3.quote = "I am animal 3";
animal4.quote = "I am animal 4";

animal;
animal2;
animal3;
animal4;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
