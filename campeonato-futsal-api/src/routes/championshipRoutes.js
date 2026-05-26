import express from 'express';
import { createChampionship, getChampionships } from '../controllers/championshipController.js';

const router = express.Router();

router.post('/', createChampionship);
router.get('/', getChampionships);

export default router;