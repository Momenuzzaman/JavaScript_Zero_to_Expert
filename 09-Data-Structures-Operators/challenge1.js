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

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...otherPlayer] = player1;
console.log(gk, otherPlayer);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const finalPlayers = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(finalPlayers);

const { team1, x, team2 } = game.odds;
console.log(team1, x, team2);