// the lowest required age for all rides access is 15 years old. although if the age is 13, they can enter only certain rides. If the age is below 13, they have to go to kids rides only.

var age = 14;
if (age >= 15) {
  console.log("you can go to any ride");
} else if (age >= 13) {
  console.log("you can go to certain rides only");
} else {
  console.log("you can go to kid's rides only");
}


