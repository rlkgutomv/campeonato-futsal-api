import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/database.json');

const readData = () => JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

export const createPlayer = (name, teamId, shirtNumber, championshipId) => {
    const data = readData();
    const newPlayer = {
        id: Date.now().toString(),
        name,
        teamId,
        championshipId,
        shirtNumber: shirtNumber || "",
        goals: 0,
        yellowCards: 0,
        redCards: 0
    };

    if (!data.players) data.players = [];
    data.players.push(newPlayer);
    writeData(data);
    return newPlayer;
};

export const getPlayers = (championshipId) => {
    const data = readData();
    let players = data.players || [];
    
    if (championshipId) {
        players = players.filter(p => p.championshipId === championshipId);
    }
    
    return players.sort((a, b) => b.goals - a.goals);
};