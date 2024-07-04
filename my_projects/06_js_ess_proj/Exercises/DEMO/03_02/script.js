/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack", // This is a Property
  volume: 30,
  color: "grey",
  pocketNum: 15, // This is a Property
  strapLength: {
    // This is a Property
    left: 26,
    right: 26,
  },
  lidOpen: false, // This is a Property

  toggleLid: function (lidStatus) {
    // This is a Method
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    // This is a Method
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
