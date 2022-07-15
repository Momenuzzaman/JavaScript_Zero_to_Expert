// Remember, we're gonna use strict mode in all scripts now!


const temperatures = [2, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemp = (temps) => {
    let max = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > max) {
            max = temps[i];
        }
    }
    console.log(max);
};
calcTemp(temperatures);

