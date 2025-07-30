// A BMI calculator where you can input your height in Inch and weight in KG and it calculates your current BMI and show you the result.

var heightInch = 70;
var weight = 63;

var heightCm = heightInch * 2.54;
var heightM = heightCm / 100;

var BMI = weight / (heightM * heightM);

if (BMI >= 40) {
  console.log(BMI.toFixed(2));
  console.log("Class III Obesity");
} else if (BMI >= 35) {
  console.log(BMI.toFixed(2));
  console.log("Class II obesity");
} else if (BMI >= 30) {
  console.log(BMI.toFixed(2));
  console.log("Class I Obesity");
} else if (BMI >= 25) {
  console.log(BMI.toFixed(2));
  console.log("Overweight");
} else if (BMI >= 22) {
  console.log(BMI.toFixed(2));
  console.log("Healthy");
} else if (BMI >= 18.5) {
  console.log(BMI.toFixed(2));
  console.log("Normal");
} else {
  console.log(BMI.toFixed(2));
  console.log("Underweight");
}
