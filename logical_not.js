// checking true

const isLeader = true;
// if (isLeader === true)
if (isLeader) {
  console.log("get a seat for our leader");
} else {
  console.log("don't let anybody enter");
}

//
// checking false with logical not operator !
const isPassed = false;
// if (isPassed === false)
if (!isPassed) {
  console.log("get out");
} else {
  console.log("you are the one");
}

// toggling boolean values
let isEnabled = true;
isEnabled = !isEnabled;
console.log(isEnabled);

// checking for falsy values
let inputValue = null;
if (!inputValue) {
  console.log("input value is falsy");
}

// checking for truthy values
let userInput = "someValue";
if (!userInput) {
  console.log("user input is empty");
} else {
  console.log("user input is : " + userInput);
}

// some usage of double not operator
let userId = 10;

console.log(!!userId);
console.log(!userId);
console.log(userId);
