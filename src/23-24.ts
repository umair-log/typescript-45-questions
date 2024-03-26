// task 23
console.log("Task 23 Conditional 5 true 5 false -------------------- \n");

let name = "Spider Man"

if(name == "Spider Man"){
    console.log("True your super hero!");
}
else{
    console.log("False your not super hero!");
}

console.log(name != "Spider Man"  );

let gender = "Male";
let age = 32;
let nationality = "Pakistani";

console.log(gender == "Male");
console.log(gender == "Female");

console.log(age >= 18 ? "Your Adult" : "Your not 18");
console.log(gender == "Female" ? `your real age would something : ${age+3}` : `your age is ${age}`  );

console.log(nationality == "Pakistani");
console.log(nationality != "Pakistani");


// task 24
console.log("Task 24 Conditions : Numerical, Equality, lower case, operators   -------------------- \n");

// Equality with strings
console.log("Testing equality with strings:");
console.log("umair" == "umair");


// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using  operators
console.log("Tests with operators :");
let num = 12;
if(num > 0 && num < 99 ){
    console.log('valid age');
}