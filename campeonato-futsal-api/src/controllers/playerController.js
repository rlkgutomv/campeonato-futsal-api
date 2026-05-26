import * as playerService from '../services/playerService.js';

export const createPlayer = (req, res) => {
    try {
        const { name, teamId, shirtNumber, championshipId } = req.body;
        
        if (!name || !teamId || !championshipId) {
            return res.status(400).json({ error: "Nome, Time e Campeonato são obrigatórios!" });
        }
        
        const newPlayer = playerService.createPlayer(name, teamId, shirtNumber, championshipId);
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao cadastrar o jogador." });
    }
};

export const getPlayers = (req, res) => {
    try {
        const { championshipId } = req.query;
        const players = playerService.getPlayers(championshipId);
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao buscar jogadores." });
    }
};