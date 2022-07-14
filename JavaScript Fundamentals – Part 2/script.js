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

// const cutFruit = fruit => {
//     return fruit * 4;
// }

// const fruitProcessor = (apple, orange) => {
//     const appleCut = cutFruit(apple);
//     const orangeCut = cutFruit(orange);

//     const juice = `Juice with ${appleCut} piece of apple and ${orangeCut} piece of orange`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));


// array

// const friends = ['emon', 'liton', 'al-amin'];
// console.log(friends);

// console.log(friends[2])

// friends[2] = 'joy';
// console.log(friends)

// Exercise

// const calcAge = (birthYear) => {
//     return 2050 - birthYear
// };

// const year = [1999, 2001, 184];
// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[2]);
// console.log(age1, age2, age3);

// const age = [age1, age2, age3];
// console.log(age)

// const friends = ['Emon', 'Liton', 'Easin'];
// console.log(friends);

// friends.push('Ayaan')
// console.log(friends);

// friends.unshift('Rabu');
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// const emon = {
//     firstName: 'Md',
//     lastName: 'Emon',
//     birthYear: 1998,
//     job: "student",
//     friends: ['Anik', 'Sagor', 'Bappy']
// };

// console.log(emon.firstName, emon.lastName);


// const emon = {
//     firstName: 'Md',
//     lastName: 'Emon',
//     birthYear: 1998,
//     job: "student",
//     friends: ['Anik', 'Sagor', 'Bappy'],
//     drivingLicense: true,

//     // calcAge: function () {
//     //     return 2022 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         console.log(this);
//         return this.age;
//     },

//     emonDetail: function () {
//         return `${this.lastName} a ${this.calcAge()} year old ${this.job} and he has ${this.drivingLicense ? 'a' : no} driving license`;
//     }
// };
// // console.log(emon.age);

// console.log(emon.calcAge());
// console.log(emon.age);
// console.log(emon.emonDetail());


// const emon = {
//     firstName: 'Md',
//     lastName: 'Emon',
//     age: 22,
//     job: "student",
//     friends: ['Anik', 'Sagor', 'Bappy'],
//     drivingLicense: true,
// };

// const type = [];
// for (let i = 0; i < emon.friends.length; i++) {
//     console.log(emon.friends[i], typeof emon.friends[i]);
//     type.push(typeof emon.friends[i]);
// }
// console.log(type);


// const years = [1889, 1986, 1990, 1995, 1998];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//     const year = years[i];
//     age.push(2022 - year);
// }
// console.log(age);

// continue
const emon = [
    'Md',
    'Emon',
    22,
    "student",
    ['Anik', 'Sagor', 'Bappy'],
    true,
];
for (let i = 0; i < emon.length; i++) {
    if (typeof emon[i] !== 'string') continue;
    console.log(emon[i]);
};
