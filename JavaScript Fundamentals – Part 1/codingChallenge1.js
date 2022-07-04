// const marksWeight = 78;
// const marksHeight = 1.67;
// const johnWeight = 92;
// const johnHeight = 1.95;


const marksWeight = 95;
const marksHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const marksBMI = marksWeight / marksHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight)

const higherBMI = marksBMI > johnBMI
console.log(higherBMI);