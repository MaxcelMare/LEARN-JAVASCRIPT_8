const team = {
  _players: [
     {
            firstName: 'Stas',
            lastName: 'Moro',
            age: 25
        },
        {
            firstName: 'Lera',
            lastName: 'Kolimbet',
            age: 27
        },
        {
            firstName: 'Max',
            lastName: 'Moroz',
            age: 22
        }
  ],
    _games: [
      {
            opponent: 'Falcons',
            teamPoints: 90,
            opponentPoints: 85
        },
        {
            opponent: 'Eagles',
            teamPoints: 95,
            opponentPoints: 92
        },
        {
            opponent: 'Canadians',
            teamPoints: 88,
            opponentPoints: 86
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
     addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(newGame);
    },
};
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 90);
console.log(team.games);

console.log(team.players);
console.log(team.games);
