///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////

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
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

//  const summedPrice = cart.reduce()

 //redo below

 const summedPrice = cart.reduce((acc, ord ) => {
    return + acc + ord.price
 } , 0 )

 const greeter = (cb, greeting) => {
     return cb(greeting)
 }

 greeter(()=> {}, 'hello')
 console.log(summedPrice)
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

// Redo below 

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue
}

console.log(calcFinalPrice(10, 2 , .25))



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
// Redo below

name string
address string
phone number string
notes string
allergies array
hasCreditCard boolean
regularCustomer boolean
discount array

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Allen mounivong',
    address: 'My house',
    phone: '81635353',
    notes: 'I suck at coding ',
    allergies: ['gluten'],
    hasCreditCard: true,
    regularCustomer: true,
    discounts: ['military', 'old people']
}
