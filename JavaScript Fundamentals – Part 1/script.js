// let age = 22;
// age = 24;

// const birthYear = 1998;

// const now = 2022
// let ageEmon = now - 1998;
// let ageLiton = now - 1984;
// // console.log(ageEmon, ageLiton);

// const firstName = 'Md';
// const lastName = 'Momenuzzaman';
// // console.log(firstName + ' ' + lastName);

// //Assignment Operator
// let x = 10 + 10;
// x += 20;   // x + 10 = 40
// x -= 10;  // x - 10 = 30
// x++;     // x + 1 = 31
// x--;   // x - 1 = 30
// x *= 5;
// x /= 15;
// // console.log(x)

// console.log(ageLiton > ageEmon)
// console.log(ageLiton < ageEmon)

// let x, y;

// x = y = 10 + 25;
// console.log(x, y);


// const now = 2022
// let ageEmon = now - 1998;
// let ageLiton = now - 1984;

// const averageAge = (ageEmon + ageLiton) / 2;
// console.log('averageAge :', averageAge, 'Emon :', ageEmon, 'Liton', ageLiton);

// template literals

// const name = 'Emon';
// const job = 'student';
// const birthYear = 1998;
// const now = 2022;
// const age = now - birthYear;
// // console.log(age);

// console.log(`I am ${name}, a ${age} year old ${job} `);
// console.log(`String with
// multiple
// line`)

// if else

// const age = 15;
// if (age >= 18) {
//     console.log(`Emon can start driving license`)
// }
// else {
//     const young = 18 - age;
//     console.log(`Emon is too young. wait another ${young} years.`);
// }

// const birthYear = 2001;
// let century
// if (birthYear <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(century);


// type conversion
// const inputYear = "1998";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 10);

// const name = 'Emon';
// console.log(Number(name) + 2);

// // type coercion
// console.log('I am 24 years old')
// console.log('1012' + 10);
// console.log('100' - 1);
// console.log('30' / 3);
// console.log('40' * 4);

// let n = '1' + 1; // = 11
// n = n - 1;
// console.log(n) 


// truthy and falsy

// five falsy  values : 0,null,NaN,undefined,''
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Emon'));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all")
// }
// else {
//     console.log("You should gate a gob")
// };

// let height = 0;
// if (height) {
//     console.log("YaY! Height is defined")
// }
// else {
//     console.log("Height is not defined")
// }

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);

if (favorite === 10) {
    console.log("10 is an amazing number ")
}
else if (favorite === 7) {
    console.log("7 is an amazing number ")
}
else {
    console.log("number is not 10 or 7")
}
