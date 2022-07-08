const calCAverage = (score1, score2, score3) => {
    return average = (score1 + score2 + score3) / 3;
}

const avgDolphins = calCAverage(85, 54, 41);
const avgKoalas = calCAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    }
    else {
        console.log("no one win the game")
    }
}

checkWinner(avgDolphins, avgKoalas);

