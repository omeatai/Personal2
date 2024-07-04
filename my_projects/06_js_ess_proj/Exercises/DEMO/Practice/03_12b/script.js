/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import { Jug, ArmyJug } from "./Jug.js";

const mySmallJug = new Jug("My Small Jug", 5, "green", "plastic", false);
const myArmyJug = new ArmyJug("My Army Jug", 10, "brown", "metal", true, true);

console.log(mySmallJug);
console.log(mySmallJug.volume);
console.log(mySmallJug.setVolume(10));
console.log(mySmallJug.volume);

console.log(myArmyJug);
console.log(myArmyJug.color);
console.log(myArmyJug.hasStraw);
console.log(myArmyJug.toggleStraw());
console.log(myArmyJug.hasStraw);

/**
 * Creates a new WaterJug object.
 * @param {string} name - The name of the WaterJug.
 * @param {number} volume - The volume of the water in the jug in liters.
 * @param {string} color- The color of the water jug.
 * @param {string} material - The type of material used to make the jug.
 * @param {boolean} lidOpen - The status of the lid on the jug.
 */

const waterJug = {
  name: "Water Jug",
  volume: 15,
  color: "blue",
  material: "plastic",
  lidOpen: false,

  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  setVolume: function (newVolume) {
    this.volume = newVolume;
    console.log("The new volume is: ", this.volume);
  },
  setName: function (newName) {
    this.name = newName;
    console.log("The new name is: ", this.name);
  },
};
