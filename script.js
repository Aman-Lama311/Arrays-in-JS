//Q1. Write a for loop that prints all even numbers from 1 to 20.
// for(let num = 1; num <= 20; num++) {
//     if(num % 2 === 0) {
//         //even num
//         console.log("num =", num)
//     }
// };

// for(let num = 1; num <= 20; num++) {
//     if(num % 2 !== 0) {
//         //odd num
//         console.log("num =", num)
//     }
// };

//Q2. Write a while loop that calculates the sum of all numbers from 1 to 100 and logs the result.

// let sum = 0;
// let i = 1;


// while (i <= 100) {
//   sum += i;  // Add the current value of i to sum
//   i++;       // Increment i to move to the next number
// }

// console.log("sum =", sum);  // Output the total sum

//Q3. Write a program using  for loops that prints a multiplication table (1 to 10).

// for(let i = 1; i <= 10; i++) {
//     console.log(`10 * ${i} = ${10 * i}`);
// };

//Arrays in JS
// let marks = [97, 76, 88, 66, 59];
// console.log(marks);
// console.log(marks.length);


//loops over an arrey //for loop
// let heroes = ["superman", "batman", "antman", "spiderman", "ironman", "hulk"];

// for(let idx = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// };

//for of loop

// let heroes = ["superman", "batman", "antman", "spiderman", "ironman", "hulk"];

// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }

//practice Q.
// let marks = [85, 97, 44, 37, 76,60];

// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`The average marks of the students = ${avg}`);

//practice Q2.
// let items = [250, 647, 300, 900, 50];

// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

//practice

// let companies = ["bloomberg", "microsoft", "uber", "goofle", "ibm", "netflix"];

//romove first company

//remove uber & add ola
// console.log(companies.splice(2, 1, "ola"));

//add amazon at the end
// console.log(companies.push("amazon"));