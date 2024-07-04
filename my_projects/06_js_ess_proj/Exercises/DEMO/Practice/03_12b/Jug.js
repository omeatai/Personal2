/**
 * Represents a water jug with various properties.
 * @class Jug
 * @constructor
 * @param {string} name - The name of the water jug.
 * @param {number} volume - The volume of water in the jug, in liters.
 * @param {string} color - The color of the jug.
 * @param {string} material - The material used to make the jug.
 * @param {boolean} lidOpen - Indicates whether the jug's lid is open or closed.
 */
class Jug {
  constructor(name, volume, color, material, lidOpen) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.material = material;
    this.lidOpen = lidOpen;
  }

  /**
   * Toggles the status of the Jug's lid from open to close or vice versa.
   * @returns {void}
   */
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  /**
   * Sets the volume of the Jug.
   * Logs the new volume to the console.
   * @param {number} newVolume - The new volume to set.
   * @returns {void}
   */
  setVolume(newVolume) {
    this.volume = newVolume;
    console.log(`The new volume is: ${this.volume}`);
  }

  /**
   * Sets the name of the Jug.
   * Logs the new name to the console.
   * @param {string} newName - The new name to set.
   * @returns {void}
   */
  setName(newName) {
    this.name = newName;
    console.log("The new name is: ", this.name);
  }
}

/**
 * Represents an Army Jug with properties and methods
 *
 * @class ArmyJug
 * @extends {Jug}
 * @constructor
 * @param {string} name - The name of the water jug.
 * @param {number} volume - The volume of water in the jug, in liters.
 * @param {string} color - The color of the jug.
 * @param {string} material - The material used to make the jug.
 * @param {boolean} lidOpen - Indicates whether the jug's lid is open or closed.
 * @param {boolean} hasStraw - Indicates whether a straw is in the Jug as true or false.
 */
class ArmyJug extends Jug {
  constructor(name, volume, color, material, lidOpen, hasStraw) {
    super(name, volume, color, material, lidOpen);
    this.hasStraw = true;
  }

  /**
   * Toggle the status of the hasStraw property in the Army Jug.
   * Logs the hasStraw property status
   * @returns {void}
   */
  toggleStraw() {
    this.hasStraw = !this.hasStraw;
    console.log("The straw is: ", this.hasStraw ? "inside" : "outside");
  }

  /**
   * Sets the volume of the Army Jug.
   * overwrites the setVolume method in the Jug class.
   * @param {number} newVolume
   * @returns {void}
   */
  setVolume(newVolume) {
    this.volume = newVolume;
    console.log("The new Army Jug volume is: ", this.volume + 30);
  }

  /**
   * Sets the name of the Army Jug.
   * Extends the setName method in the Jug class.
   * @param {string} newName
   * @returns {void}
   */
  setName(newName) {
    super.setName(newName);
    console.log("It is an Army Jug.");
  }
}

export { Jug, ArmyJug };
