// task 18 
console.log("Task 18 -------------------- \n");

// 5 places list , print simple , alphabetical order, reverse alphabetical 
// Reverse the order  , stored in alphabetical order. , stored in reverse alphabetical order.

let places: string[] = [
    'Paris', 'Tokyo', 'New York', 'London' , 'Rome', 'Berlin', 'Amsterdam'
];

console.log("Original Order");
console.log(places);

//* work here later tosort not available in 2022 ts
// console.log(places.toSorted());
console.log(places);

// task 19
console.log("Task 19 -------------------- \n");

// just print the number of item in the list

console.log("Number of item in the list is :", places.length);


// task 20
console.log("Task 20 Make Array and Print -------------------- \n");

const cities: string[]= [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Sydney",
    "Toronto",
    "Dubai",
    "Moscow",
    "Berlin",
    "Rio de Janeiro",
    "Singapore",
    "Hong Kong"
];

console.log("List of cities :");
console.log(cities.forEach(city => {
    console.log(city);
}));

// task 21
console.log("Task 21 Store in Object -------------------- \n");

const usa = {
    name: "United States",
    capital: "capital city",
    bigestMountain: "mountain",
    rivers: 40,
    states: 52,
    cities:120
};

console.log("Country name :",usa.name);

// task 22
console.log("Task 22 Produce array index error then fix -------------------- \n");

const students = [
"Ali", "umair","Taqi"
];
console.log(students[3]); // This will produce an index error
console.log(students[students.length-1]);


