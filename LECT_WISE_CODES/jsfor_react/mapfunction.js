// Create an array of names
let names1 = ["Pedro", "Jessica", "Carol"];

// Use the .map() method to create a new array
// .map() takes a callback function and runs it on every element of the array
// It always returns a new array with the results of the callback
names1.map((name) => {
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
/*-------------------------------------------------------------------------------------------------------------------------------*/
////////////////////////// BEST WAY ///////////////////////////////////////////////
let names2 = ["Pedro", "Jessica", "Carol"];

// .map() creates a new array by running the function on each element
let newnames = names2.map((name) => {
  return "Joe"; // every element is replaced with "Joe"
});

// Print the new array
console.log(newnames); // ["Joe", "Joe", "Joe"]
/////////////////////////////////////////////////// now again something new is coming uo //////////////////////////////////////
let names = ["Pedro", "Jessica", "Carol"];

names.map((name) => {
  return <h1>{name}</h1>;
});
// this is acutually jsx that why isme hamne {name} use kera hai becuase saaath mai iske bhai html bhi lega hua hai
