const event = new Promise((resolve, reject) => {
  var name = "Pedro";
  if (name == "Pedro") {
    resolve(name);
  } else {
    reject("Name was not Pedro, name was: " + name);
  }
});

event
  .then((name) => {
    // name has been grabed from the resolve
    console.log(name); // Runs when resolved
  })
  .catch((err) => {
    // ye ek dry catch hai
    console.log(err); // Runs when rejected
  });
