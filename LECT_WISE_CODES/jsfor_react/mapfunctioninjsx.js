let names = ["Pedro", "Jessica", "Carol"];

names.map((name) => {
  return <h1>{name}</h1>;
});
// this is acutually jsx that why isme hamne {name} use kera hai becuase saaath mai iske bhai html bhi lega hua hai
// Suppose names2 is an array
let names3 = ["Pedro", "Jack", "Jessica"];

// Use .map() to create a new array by appending "1" to each name
let newnamesx = names2.map((name) => {
  return name + "1"; // For each element, add "1" at the end
});

// Print the new array
console.log(newnamesx); // ["Pedro1", "Jack1", "Jessica1"]
