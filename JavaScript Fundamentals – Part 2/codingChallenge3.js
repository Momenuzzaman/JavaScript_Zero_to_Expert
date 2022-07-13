const mash = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    hight: 1.69,

    calcBMI: function () {
        return this.weight / this.hight ** 2;
    }
};

console.log(mash.calcBMI());