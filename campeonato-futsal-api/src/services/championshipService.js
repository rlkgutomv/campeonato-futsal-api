import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/database.json');

const readData = () => JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

export const createChampionship = (name) => {
    const data = readData();
    const newChampionship = {
        id: Date.now().toString(),
        name: name,
        createdAt: new Date().toISOString()
    };

    if (!data.championships) data.championships = [];
    data.championships.push(newChampionship);
    writeData(data);
    
    return newChampionship;
};

export const getChampionships = () => {
    const data = readData();
    return data.championships || [];
};