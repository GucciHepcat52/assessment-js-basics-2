///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, current) => acc + current.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
  let totalWithTax = cartTotal * (1 + tax);
  let totalWithCoupon = totalWithTax - couponValue;
  return totalWithCoupon;
}
console.log(calcFinalPrice(12, 2, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    // The customer object would need:
    // Customer name: This would be a string. The restaurant needs to know who each order is for
    // Customer order: This would be an array of each item of the order. The restaurant needs to know what the customer ordered
    // Customer totalPrice: This would be a number. The restaurant needs to know how much the order costs
    // Customer paymentType: This would be a string. The restaurant needs to know how the customer is paying for the order

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  name: "Dallin",
  order: ["Chips and dip", "Burrito", "Dr. Pepper", "Fried Ice Cream"],
  totalPrice: 21.97,
  paymentType: "Visa",
};

console.log(customer);