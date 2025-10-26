// Create an array of names
let names = ["Pedro", "Jessica", "Carol"];

// Use the .map() method to create a new array
// .map() takes a callback function and runs it on every element of the array
// It always returns a new array with the results of the callback
names.map((name) => {
  // This callback receives each element (here called 'name') one by one
  // For every element, it returns the string "Joe"
  return "Joe";
});

// What happens internally:
// First iteration: name = "Pedro"  -> returns "Joe"
// Second iteration: name = "Jessica" -> returns "Joe"
// Third iteration: name = "Carol" -> returns "Joe"

// Result: a new array is created (original array 'names' stays the same)
["Joe", "Joe", "Joe"];
