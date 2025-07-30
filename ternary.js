/*
TERNARY ---> Three parts

condition -- question mark ? do something when true -- colon : do something when false

*/

const age = 20;

// // normal if-else
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cant vote");
}

// // simple ternary
age >= 18 ? console.log("you can vote") : console.log("you can't vote");

let price = 500;
const isLeader = true;

// normal if else

if (isLeader === true) {
  price = 0;
} else {
  price = price + 100;
}

// simple ternary

price = isLeader === true ? 0 : price + 100;
console.log(price);

// semi -advance ternary

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 1000;
}

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
