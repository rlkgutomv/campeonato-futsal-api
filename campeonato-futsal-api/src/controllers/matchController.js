import * as matchService from '../services/matchService.js';

export const createMatch = (req, res) => {
    try {
        const { championshipId, team1Id, team2Id, score1, score2, playerStats } = req.body;
        
        if (!championshipId || !team1Id || !team2Id || score1 === undefined || score2 === undefined) {
            return res.status(400).json({ error: "Dados incompletos para registrar a partida!" });
        }

        if (team1Id === team2Id) {
            return res.status(400).json({ error: "Um time não pode jogar contra si mesmo." });
        }

        const newMatch = matchService.createMatch(
            championshipId, 
            team1Id, 
            team2Id, 
            Number(score1), 
            Number(score2), 
            playerStats
        );
        
        res.status(201).json(newMatch);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao registrar a partida." });
    }
};

export const getMatches = (req, res) => {
    try {
        const { championshipId } = req.query;
        const matches = matchService.getMatches(championshipId);
        
        // 🛡️ PROTEÇÃO ADICIONADA AQUI: Se for undefined, devolve []
        res.status(200).json(matches || []); 
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao buscar partidas." });
    }
};