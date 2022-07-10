
console.log("========== Area of a circle ==========");

let radius = 5;
let circleArea = radius * radius * Math.PI;

console.log("The radius of the circle is: ", radius);
console.log("The area of the circle is: ", circleArea)

console.log("========== Total price of phones ==========")

let phones;
let phonesPrice;
let taxRatePercentage;
let taxRate;
let totalPrice;

phones = 30;
phonesPrice = 119.95;
taxRatePercentage = 5;
taxRate = 1 + (taxRatePercentage / 100);
totalPrice = phones * phonesPrice * taxRate;

console.log("Number of phones: " , phones);
console.log("Price of one phone: ", phonesPrice, "$");
console.log("Tax rate: ", taxRatePercentage, "%");
console.log("The total price is: ", totalPrice, "$");
