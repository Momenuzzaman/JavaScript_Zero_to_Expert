const bills = [22, 259, 176, 440, 37, 105, 10, 1100, 86, 52];
const total = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const tip = calcTip(bill);
    total.push(bill + tip);
    console.log(`bill : ${bill} ,tip : ${tip}`);
}
console.log(`total bill : ${total}`);