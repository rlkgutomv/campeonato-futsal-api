import express from 'express';
import { getMatches, createMatch } from '../controllers/matchController.js';

const router = express.Router();

router.get('/', getMatches);
router.post('/', createMatch);

export default router;