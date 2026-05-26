import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('src/data/database.json');
const readDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

export const login = (req, res) => {
    try {
        const { username, password } = req.body;
        const db = readDB();

        const user = db.users?.find(u => u.username === username && u.password === password);

        if (user) {
            res.status(200).json({ id: user.id, username: user.username, role: user.role });
        } else {
            res.status(401).json({ error: "Usuário ou senha inválidos!" });
        }
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro interno no servidor." });
    }
};