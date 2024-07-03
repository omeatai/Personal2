var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

// Get items from an array
console.log(counties[0]);
console.log(counties[2]);

// Add items at a specific index
counties[2] = "Cheshire";
counties;

counties[4] = "Carroll";
counties;

// Add items to the end of the array
counties[counties.length] = "Merrimack";
counties;

counties.push("Coos");
counties;

// Remove items from the end of the array
var removedValue = counties.pop();
removedValue;
counties;

// Delete an item from the array
delete counties[2];
counties;

// Remove specific items from the array
counties.splice(2, 1);
counties;
console.log(counties.length);

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
