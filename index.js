// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");
// console.log(`Random number: ${generateRandomNumber()}`)
// console.log(`Celcius to farhenhite: ${celciusToFahrenheit(0)}`)


import  getPosts, {getPostsLength} from "./postControler.js";

console.log(getPosts())
console.log(`Total length: ${getPostsLength()}`)