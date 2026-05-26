import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('src/data/database.json');
const readDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

export const createMatch = (championshipId, team1Id, team2Id, score1, score2, playerStats) => {
    const db = readDB();
    
    if (!db.matches) db.matches = [];
    if (!db.players) db.players = [];

    const newMatch = {
        id: Date.now().toString(),
        championshipId,
        team1Id,
        team2Id,
        score1: Number(score1),
        score2: Number(score2),
        playerStats: playerStats || []
    };

    db.matches.push(newMatch);

    const team1 = db.teams.find(t => t.id === team1Id);
    const team2 = db.teams.find(t => t.id === team2Id);

    if (team1 && team2) {
        team1.goals = (team1.goals || 0) + newMatch.score1;
        team2.goals = (team2.goals || 0) + newMatch.score2;

        team1.points = team1.points || 0;
        team2.points = team2.points || 0;

        if (newMatch.score1 > newMatch.score2) {
            team1.points += 3; 
        } else if (newMatch.score2 > newMatch.score1) {
            team2.points += 3; 
        } else {
            team1.points += 1; 
            team2.points += 1;
        }
    }

    if (playerStats && playerStats.length > 0) {
        playerStats.forEach(stat => {
            const player = db.players.find(p => p.id === stat.playerId);
            if (player) {
                player.goals = (player.goals || 0) + stat.goals;
                player.yellowCards = (player.yellowCards || 0) + stat.yellowCards;
                player.redCards = (player.redCards || 0) + stat.redCards;
            }
        });
    }

    writeDB(db);
    return newMatch;
};

export const getMatches = (championshipId) => {
    const db = readDB();
    if (!db.matches) return [];
    return db.matches.filter(m => m.championshipId === championshipId);
};

export const getStandings = () => {
    const db = readDB();
    if (!db.teams) return [];
    return db.teams.sort((a, b) => {
        if (b.points !== a.points) return (b.points || 0) - (a.points || 0);
        return (b.goals || 0) - (a.goals || 0);
    });
};