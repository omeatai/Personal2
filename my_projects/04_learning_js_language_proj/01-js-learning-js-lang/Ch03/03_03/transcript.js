var bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

//Accessing Values in Object
// bird."quote"; // this does not work
console.log(bird.quote);
console.log(bird["quote"]);

//Manipulating Objects
bird.color = "black";
bird;

bird["where it lives"] = "in London";
bird.whereItLives = "in a small tree";

console.log(bird["where it lives"]);
console.log(bird.whereItLives);

delete bird.color;

bird;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
