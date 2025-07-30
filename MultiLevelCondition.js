/** Multi Level Condition**/

/** 
 There is a 10% discount if the price of the product is more that equal to 5000. There is also a 5% discount if the price is more than equals to 2500 Write a code for the pay amount. 
  
  **/
const price = 2999;

if (price >= 5000) {
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 2500) {
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}

/**
 *
 *
 * **/
