const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    hight: 1.69,

    calcBMI: function () {
        return this.weight / this.hight ** 2;
    }
};

const john = {
    firstName: 'Jhon',
    lastName: 'Smit',
    weight: 92,
    hight: 1.95,

    calcBMI: function () {
        return this.weight / (this.hight * this.hight);
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName} ${mark.lastName} BMI ${mark.calcBMI()} is higher than ${john.firstName} ${john.lastName} ${john.calcBMI()}`);
}
else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.firstName} ${john.lastName} BMI ${mark.calcBMI()} is higher than ${mark.firstName} ${john.lastName} ${john.calcBMI()}`);
}
console.log(mark.calcBMI());