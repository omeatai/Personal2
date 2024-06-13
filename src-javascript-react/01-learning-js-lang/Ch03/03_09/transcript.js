var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/; // "this" is found in string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

regex = /this/i; // "this" (case-insensitive) is found in string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

regex = /^this/i; // "this" (case-insensitive) is found at the beginning of string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

regex = /this$/i; // "this" (case-insensitive) is found at the end of string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

regex = /ever.$/i; // "ever" (case-insensitive) is found at the end of string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

regex = /ever\.$/i; // "ever." (case-insensitive) is found at the end of string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
