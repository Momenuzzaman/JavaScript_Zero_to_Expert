// function name() {
//     console.log("my name is Emon")
// };
// name();

// function juiceMaker(apple, orange) {
//     const juice = `${apple} Apple and ${orange} Orange juice`
//     return juice;
// }

// console.log(juiceMaker(4, 0));

// const orangeAndAppleJuice = juiceMaker(10, 9);
// console.log(orangeAndAppleJuice)


// function declaration
// function calcAge(birthYear) {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     return age;
// }
// const emonAge = calcAge(1998);
// console.log(emonAge);

// // function expiration

// const calcAge2 = function (birthYear) {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     return age;
// }
// const litonAge = calcAge2(1984);
// console.log(litonAge);

// arrow function

// const calcAge3 = (birthYear) => {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     return age;
// }
// console.log(calcAge3(1984));

// const retirement = (birthYear) => {
//     const currentYEar = 2022;
//     const age = currentYEar - birthYear;
//     const retirement = 65 - age;
//     return retirement
// };
// console.log(retirement(1998));


// function calls other function

const cutFruit = fruit => {
    return fruit * 4;
}

const fruitProcessor = (apple, orange) => {
    const appleCut = cutFruit(apple);
    const orangeCut = cutFruit(orange);

    const juice = `Juice with ${appleCut} piece of apple and ${orangeCut} piece of orange`;
    return juice;
}

console.log(fruitProcessor(5, 3));