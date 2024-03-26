let name: string = "Umair butt";
const titlecaseName: string = name.replace(/\b\w/g, c => c.toUpperCase());

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(titlecaseName);