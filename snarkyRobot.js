let n = prompt('what is your favorite number');
let x = parseInt(n) + 1;

if (n == 42) {
  console.log("Yay! That\'s my favorite too!");
} else if (n < 42) {
  console.log("Eh, that\'s OK but " + x.toString() + " would be even better!");
} else {
  console.log("LAME. That number is too large!")
}
