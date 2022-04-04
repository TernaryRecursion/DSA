// Maps are created with the NEW operator
let romanNumerals = new Map();
// use the SET() method to add a key/value pair
romanNumerals.set(1, "I");
romanNumerals.set(2, "II");
romanNumerals.set(3, "III");
// use the GET() method to retrieve the value
console.log(romanNumerals.get(1));

// you can reassign the value paired with a key
romanNumerals.set(1, "IV");
romanNumerals.set(1, "IV");
romanNumerals.set(1, "IV");
romanNumerals.set(1, "IV");
console.log(romanNumerals.get(1));

// the keys don't have to an integer
let morseCode = new Map();
morseCode.set("a", ".-");
morseCode.set("b", "-...");
morseCode.set("c", "-.-.");

console.log(morseCode.get("b"))

// use the HAS method to check for a key
console.log(morseCode.has("f"));

// you can add multiple values when you create the map by using an nested array
let heroes = new Map([
  ["Clark Kent", "Superman"],
  ["Bruce wayne", "Batman"],
]);

// you can get the number of key/value pairs by using the SIZE property
console.log(heroes.size);

// use the DELETE() method to remove a single key/value pair
heroes.delete("Clark Kent");
console.log(heroes.size);

// use the CLEAR() method to remove all key/value pairs
morseCode.clear();
console.log(morseCode.size);




