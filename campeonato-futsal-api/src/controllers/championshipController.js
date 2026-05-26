import * as championshipService from '../services/championshipService.js';

export const createChampionship = (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: "O nome do campeonato é obrigatório!" });
        }
        
        const newChamp = championshipService.createChampionship(name);
        res.status(201).json(newChamp);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao criar campeonato." });
    }
};

export const getChampionships = (req, res) => {
    try {
        const champs = championshipService.getChampionships();
        res.status(200).json(champs);
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao buscar campeonatos." });
    }
};