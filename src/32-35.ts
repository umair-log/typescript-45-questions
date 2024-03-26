// task 32
console.log("Task 32 No Users: -------------------- \n");

const currentUsers: string[] = ["alice", "bob", "charlie", "david", "emma"];
const newUsers: string[] = ["alice", "frank", "David"];

newUsers.forEach((item) => {
  if (
    currentUsers.some((user) => user.toLocaleLowerCase() === item.toLowerCase())
  ) {
    console.log(
      `Sorry, the username "${item}" is already taken. Please choose a different username.`
    );
  } else {
    console.log(`Congratulations! The username "${item}" is available.`);
  }
});

// task 33
console.log("Task 33 Ordinal Numbers -------------------- \n");

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((num) => {
  console.log(
    num == 1 ? "1st" : num == 2 ? "2nd" : num == 3 ? "3rd" : `${num}th`
  );
});

// task 34
console.log("Task 34 Pizzas -------------------- \n");

const favoritePizzas: string[] = ["Margherita", "Pepperoni", "Hawaiian"];

favoritePizzas.forEach((pizza) => {
  console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

// task 35
console.log("Task 34 Animals -------------------- \n");

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
