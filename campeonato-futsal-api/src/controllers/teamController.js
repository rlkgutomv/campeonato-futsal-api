import * as teamService from '../services/teamService.js';

export const createTeam = (req, res) => {
    try {
        const { name, coach, championshipId } = req.body;
        
        if (!name || !championshipId) {
            return res.status(400).json({ error: "Nome do time e ID do campeonato são obrigatórios!" });
        }
        
        const newTeam = teamService.createTeam(name, coach, championshipId);
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao cadastrar o time." });
    }
};

export const getTeams = (req, res) => {
    try {
        const { championshipId } = req.query; 
        const teams = teamService.getTeams(championshipId);
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao buscar times." });
    }
};