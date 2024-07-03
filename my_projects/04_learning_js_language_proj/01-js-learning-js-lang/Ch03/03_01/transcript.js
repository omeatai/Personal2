var emptyObject = {};
emptyObject;

var notEmptyObject = {
  label: "value",
  label2: "value2",
};

notEmptyObject;

let bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

let bear = {
  genus: "ursus",
  species: "arctos",
  commonName: "brown bear",
  callType: "roar",
  quote: "",
  maxOffspring: 3,
  noisy: true,
  deadly: true,
};

const bookOfKnowledge = {
  "lunch time": "12:30 PM",
  "the ultimate answer": 42,
  bestSong: "Lonnie's Lament",
  earth: "Mostly harmless.",
};

console.log(bird);
console.log(bear);
console.log(bookOfKnowledge);

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
