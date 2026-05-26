import express from 'express';
import cors from 'cors';
import teamRoutes from './routes/teamRoutes.js';
import matchRoutes from './routes/matchRoutes.js'; 
import playerRoutes from './routes/playerRoutes.js';
import championshipRoutes from './routes/championshipRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/championships', championshipRoutes);

app.listen(PORT, () => {
    console.log(`API do Campeonato rodando na porta ${PORT} 🚀`);
});