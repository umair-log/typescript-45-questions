// task 43
console.log("Task 43 Great Magicians -------------------- \n");

const magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function make_great(magicians: string[]){
    let newMagicianList:string[] = [];
    magician_names.forEach(item => {
        newMagicianList.push(`${item} the Great`);
    });

  }

make_great(magician_names); 

// task 44
console.log("Task 44 Sandwiches -------------------- \n");
function makeSandwich(...items: string[]){
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log(" - You haven't selected any items for your sandwich.");
    } else {
        console.log(" - Your sandwich contains:");
        items.forEach(item => console.log(`    - ${item}`));
    }
    console.log("\n");    
}

makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss");
makeSandwich();


// task 45
console.log("Task 45 Cars -------------------- \n");

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
