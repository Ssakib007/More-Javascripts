/*The price of the food is 500. Although if the age of the customer is below or equals to 12, they can eat for free. If the age of the customer is above or equals to 60, they can have a 50% discount. If the age of the customer is above or equals to 50, they can have a 25% discount. If the age of the customer is above or equals to 40, they can have a 10% discount*/

const age = 30;
const price = 500;
if (age < 12) {
  console.log("you can eat for free");
} else if (age >= 60) {
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 50) {
  const discount = (price * 25) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 40) {
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
