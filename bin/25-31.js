"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task 25
console.log("Task 25 Alien Colors #1 -------------------- \n");
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
else if (alien_color == "yellow") {
    console.log("You lose 5 points!");
    // No output because the condition is false
}
// task 26
console.log("Task 26 Alien Colors #2 -------------------- \n");
function points(color) {
    if (color === "Green") {
        console.log("The player just earned 5 points for shooting the alien.");
    }
    else if (color === "Red") {
        console.log("The player just earned 10 points.");
    }
}
points("Green");
points("Red");
// task 27
console.log("Task 27 Alien Colors #3 -------------------- \n");
function points2(color) {
    if (color === "Green") {
        console.log("The player just earned 5 points for shooting the alien.");
    }
    else if (color === "Red") {
        console.log("The player just earned 15 points.");
    }
    else if (color === "Yellow") {
        console.log("The player just earned 10 points.");
    }
    else {
        console.log("Provide a Valid Color");
    }
}
points2("Green");
points2("Yellow");
points2("Red");
// task 28
console.log("Task 28 Stages of Life -------------------- \n");
const age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// task 29
console.log("Task 29 Favorite Fruit -------------------- \n");
const favoriteFruits = ["apple", "banana", "orange"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}
// task 30
console.log("Task 30 Hello Admin -------------------- \n");
const usernames = ["admin", "Alice", "Bob"];
usernames.forEach((item) => {
    if (item == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${item}, thank you for logging in again`);
    }
});
// task 31
console.log("Task 31 No Users: -------------------- \n");
usernames.pop();
usernames.pop();
usernames.pop();
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
