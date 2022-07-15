// Remember, we're gonna use strict mode in all scripts now!


const temperatures = [2, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemp = (temps) => {
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        const temp = temps[i];
        if (typeof temp !== 'number') continue;
        if (temp > max) {
            max = temps[i];
        }
        if (temp < min) {
            min = temp;
        }
    }
    console.log(max, min);
    console.log(max - min);
};
calcTemp(temperatures);
