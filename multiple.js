// The bride is good if the salary is more than 20000 and height is more than 66 inch.

const salary = 24000;
const isBCS = true;
const height = 73;
const hasCar = false;

if (salary > 20000 && height > 66) {
  console.log("Shu patro");
} else {
  console.log("onno patro khuji");
}


// The marriage will go if the salary is more than 25000 and height is more than 72 inch.
const salary2 = 24000;
const isBCS2 = true;
const height2 = 73;
const hasCar2 = false;
if (salary2 > 25000 || height2 > 72) {
  console.log("kobul");
} else {
  console.log("vag");
}


// The marriage will happen if the salary is more than 25000 or height is more than 30 or job is BCS.
const salary3 = 24000;
const isBCS3 = true;
const height3 = 73;
const hasCar3 = false;

if (salary3 > 25000 || height3 > 30 || isBCS3 == true) {
  console.log("kobul");
} else {
  console.log("vag");
}

// complex condition

// The marriage will happen if salary more than 25000 and has a car. Or if job is BCS.

const salary4 = 24000;
const isBCS4 = true;
const height4 = 73;
const hasCar4 = false;

if ((salary4 > 25000 && hasCar4 == true) || isBCS4 == true) {
  console.log("14 gushti raji");
} else {
  console.log("onno dike jan");
}


// The marriage will happen if salary is more than 25000. Or if has car and job is bcs.
const salary5 = 24000;
const isBCS5 = true;
const height5 = 73;
const hasCar5 = false;

if ((salary5 > 25000 || hasCar5 == true) && isBCS5 == true) {
  console.log("14 gushti raji");
} else {
  console.log("onno dike jan");
}
