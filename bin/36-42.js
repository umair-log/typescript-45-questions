"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task 36
console.log("Task 36 T-Shirt -------------------- \n");
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
make_shirt("L", "Coding is life");
// task 37
console.log("Task 37 Large Shirts -------------------- \n");
function make_shirt2(size = "L", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
make_shirt2();
make_shirt2("M");
make_shirt2("S", "Hello, world!");
// task 38
console.log("Task 38 Cities -------------------- \n");
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("New York"); // Uses default country parameter
// task 39
console.log("Task 39 City Names -------------------- \n");
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York", "USA"));
// task 40
console.log("Task 40 Album -------------------- \n");
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
// task 41
console.log("Task 41 Magicians -------------------- \n");
const magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
show_magicians(magician_names);
// task 42
console.log("Task 42 Great Magicians -------------------- \n");
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magician_names[i] = `the Great ${magicians[i]}`;
    }
}
make_great(magician_names);
show_magicians(magician_names);
