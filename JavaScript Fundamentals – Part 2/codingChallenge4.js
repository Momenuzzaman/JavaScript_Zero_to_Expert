const bills = [22, 259, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const tip = calcTip(bill);
    tips.push(tip);
    total.push(bill + tip);
    console.log(`bill : ${bill} ,tip : ${tip}`);
}
console.log(`total bill : ${total}`);



const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));
