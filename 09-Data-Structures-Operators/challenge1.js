const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// challenge 2================================================

// for (const [i, goal] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${goal}`);
// }
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//     average += odd;
//     console.log(average);
// }
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//     console.log(team, odd);
// }

// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...otherPlayer] = player1;
// console.log(gk, otherPlayer);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const finalPlayers = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(finalPlayers);

// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2);

// const printGoals = (...players) => {
//     console.log(players);
//     console.log(`${players.length} goal were scored`);
// };
// printGoals(...game.scored);
