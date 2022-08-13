// const name = "Emon";

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;

//     function detail() {
//         const output = `My Name ${name}. Age ${age} Born ${birthYear}`;
//         console.log(output);
//     }
//     detail();
//     return age;
// };

// const result = calcAge(1998);
// console.log(result);

// const product = 10;

// const deleteProduct = () => {
//     console.log("All products deleted");
// }
// if (product < 15) {
//     deleteProduct();
// }

// const calcAge = birthYear => {
//     console.log(2022 - birthYear);
// };
// calcAge(1998);

// const jonas = {
//     year: 1998,
//     calcAge: function (birthYear) {
//         console.log(2022 - this.year);
//     }
// };
// // jonas.calcAge(1999);
// const emon = {
//     year: 2000
// };
// emon.calcAge = jonas.calcAge;
// emon.calcAge();

// const jonas = {
//     firstName: 'Jonas',
//     year: 1998,
//     calcAge: function () {
//         console.log(2022 - this.year);
//     },
//     name: function () {
//         console.log(`hey ${this.firstName}`);
//     }
// };

// // jonas.calcAge();
// jonas.name();
let age = 20;
let oldAge = age;
age = 21;
console.log(oldAge, age);

const me = {
    name: 'Emon',
    age: 22
};
