// Define the `cats` array
let cats = [];

// Function to append a cat to the end of the `cats` array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the `cats` array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the `cats` array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the `cats` array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the `cats` array and return a new array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the `cats` array and return a new array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from the `cats` array and return a new array (non-destructive)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat from the `cats` array and return a new array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}

// Export the functions (if needed)
module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
// Write your solution here!
// Function to append a cat to the end of the `cats` array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the `cats` array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the `cats` array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the `cats` array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the `cats` array and return a new array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the `cats` array and return a new array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from the `cats` array and return a new array (non-destructive)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat from the `cats` array and return a new array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}
