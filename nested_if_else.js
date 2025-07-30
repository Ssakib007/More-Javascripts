// The lowest required age to enter the fair is 15. There is a haunted house at the fair. To enter the haunted house, a kid must be with an adult. Otherwise they can enter the fair but can not enter the haunted house.

let age = 16;
let withAdult = true;

if (age >= 15) {
  console.log("you can enter the fair");

  if (withAdult) {
    console.log("you can also enter the haunted house");
  } else {
    console.log("you can not enter the haunted house");
  }
} else {
  console.log("you can not enter the fair");
}

// just another example
const money = 20;
if (money > 300) {
  console.log("bro you are rich!!");
} else {
  if (money > 100) {
    console.log("you are not poor not rich");
  } else {
    if (money > 0) {
      console.log("eat banana");
    } else {
      console.log("don't seek money");
    }
  }
}
