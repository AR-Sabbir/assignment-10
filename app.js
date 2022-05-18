
// javascript regular expression
// ==============================


// Create a  username pattern
let userName  = 'sabbir12';
let pattern1 = /^[a-z0-9]{8}$/ ;
console.log(pattern1.test(userName));


// Create an email pattern 
let email = 'ar420sabbir@gmail.com';
let pattern2 = /^[a-z0-9_\.]*@[a-z]{2,10}\.[a-z]{2,5}$/ ;
console.log(pattern2.test(email));


// Create a Bangladeshi phone number pattern
let phoneNumber = '01739840318';
let pattern3 = /^(\+8801|01)[0-9]{9}$/ ;
console.log(pattern3.test(phoneNumber));


// Create a password pattern 
let password = 'aza24^A&^%%'
let pattern4 = /[A-Z]{1,}[a-z0-9`~!@#$%^&**()_+]*$/ ;
console.log(pattern4.test(password));

//Create a zipcode pattern  
let zipCode = '1234';
let pattern5 = /^[0-9]{4}$/ ;
console.log(pattern5.test(zipCode));



