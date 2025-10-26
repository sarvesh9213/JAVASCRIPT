// Create an object named 'person' with 3 properties
const person = {
  name: "Pedro", // person's name
  age: 20, // person's age
  isMarried: false, // marital status
};

// Create a new object 'person2' by copying all properties from 'person'
// The spread operator (...person) copies everything
// Then we override the 'name' property with a new value "Jack"
const person2 = { ...person, name: "Jack" };

// Now:
// person  -> { name: "Pedro", age: 20, isMarried: false }
// person2 -> { name: "Jack", age: 20, isMarried: false }

// Create an array named 'names'
const names = ["Pedro", "Jack", "Jessica"];

// Create a new array 'names2' by copying all elements from 'names'
// and then adding a new element "Joel" at the end
const names2 = [...names, "Joel"];

// Now:
// names  -> ["Pedro", "Jack", "Jessica"]
// names2 -> ["Pedro", "Jack", "Jessica", "Joel"]

// ✅ The spread operator (...) helps copy or clone objects/arrays
// without changing (mutating) the original ones.
// This is called "immutability" — very important in React.
