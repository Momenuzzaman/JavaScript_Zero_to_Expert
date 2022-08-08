const name = "Emon";

function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function detail() {
        const output = `My Name ${name}. Age ${age} Born ${birthYear}`;
        console.log(output);
    }
    detail();
    return age;
};

const result = calcAge(1998);
console.log(result);