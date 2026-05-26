import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/database.json');

const readData = () => JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

export const createTeam = (name, coach, championshipId) => {
    const data = readData();
    const newTeam = {
        id: Date.now().toString(),
        name,
        coach: coach || "",
        championshipId,
        points: 0,
        goals: 0
    };

    if (!data.teams) data.teams = [];
    data.teams.push(newTeam);
    writeData(data);
    return newTeam;
};

export const getTeams = (championshipId) => {
    const data = readData();
    let teams = data.teams || [];
    
    if (championshipId) {
        teams = teams.filter(t => t.championshipId === championshipId);
    }
    
    return teams;
};