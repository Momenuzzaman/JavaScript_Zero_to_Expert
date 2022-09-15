// const person = function (name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
// };

// const emon = new person('Emon', 1998);
// console.log(emon);
// const liton = new person('Liton', 1984);
// console.log(liton);

// person.prototype.calcAge = function () {
//     console.log(2022 - this.birthYear);
// };

// emon.calcAge();
// liton.calcAge();

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} speed of the car in ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} speed of the car in ${this.speed} km/h`);
};
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
console.log("----------");
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
