const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(tip);
const total = bill + tip;
console.log(`The bill was ${bill},the tip was ${tip} and total price was ${total}`);