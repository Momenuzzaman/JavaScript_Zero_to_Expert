const billCal = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;
};

const bill = [275, 40, 430];
const tip = [billCal(bill[0]), billCal(bill[1]), billCal(bill[2])];
console.log(tip);

const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(total);