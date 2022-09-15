const person = function (name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
};

const emon = new person('Emon', 1998);
console.log(emon);
const liton = new person('Liton', 1984);
console.log(liton);

person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

emon.calcAge();
liton.calcAge();

