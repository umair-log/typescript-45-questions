let homies: string[] = [
    'Ali','Mani','Sunny','Dani','Taqi','Khuzzi'
];

// for looping each element in the array
homies.forEach(names => {
    console.log(names);
});

// 12 task solve
console.log("Task 12 -------------------------------- ");
homies.forEach(names => {
    console.log("Hello ",names);
});

// 13 task solve
console.log("Task 13 -------------------------------- ");
const Transportation: string[] = ["Tesla Model S", "Aqua", "Alto New", "Dhoom Bike"];

Transportation.forEach(item => {
    console.log("I would like to own a " ,item);
});

// 14 Task 
console.log("Task 14 -------------------------------- ");
// Create a list of people to invite to dinner
const guestList: string[] = ["luke belmar", "Andrew tate", "Sahil Adeem"];

// Print a message inviting each person to dinner
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner with me. I would be honored to have your company.\n\nSincerely,\nUmair Butt`);
    console.log("----------------------");
});

// 15 Task 
console.log("Task 15 -------------------------------- ");
// add remove one guest and add a new one 
guestList.pop();
guestList.push("Umair");
console.log(guestList);

console.log("Task 16 -------------------------------- ");
//  add 3 more guest 1 in start , 2 in middle , 3 last
guestList.splice(0,0,"Ali");
guestList.splice(2,0,"Nasir");
guestList.push("Last guest");
console.log(guestList);

console.log("Task 17 -------------------------------- ");
// print only space for 2 , remove 1 element at a time and print.
// there invite. make the list empty
console.log("Sorry to say now we only have space of 2 person for dinner.");


// loop jab tk list zero
for (let i = 0; i <1; i++){

}

while(guestList.length > 0){
    const popPerson = guestList.pop();
    if(guestList.length < 2 ){
        console.log(`Your ${popPerson} Still invited `);
    }
    else{
        console.log(`Sorry ${popPerson} you are not invited now.`);
    }
    console.log(guestList);
    
}






