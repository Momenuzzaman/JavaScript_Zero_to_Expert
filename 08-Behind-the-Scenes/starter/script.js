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

const jonas = {
    currentYEar: 2022,
    calcAge: function (birthYear) {
        console.log(this.currentYEar - birthYear);
    }
};
jonas.calcAge(1999);