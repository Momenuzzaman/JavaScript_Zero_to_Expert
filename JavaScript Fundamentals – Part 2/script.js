function name() {
    console.log("my name is Emon")
};
name();

function juiceMaker(apple, orange) {
    const juice = `${apple} Apple and ${orange} Orange juice`
    return juice;
}

console.log(juiceMaker(4, 0));

const orangeAndAppleJuice = juiceMaker(10, 9);
console.log(orangeAndAppleJuice)