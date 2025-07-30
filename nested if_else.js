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
