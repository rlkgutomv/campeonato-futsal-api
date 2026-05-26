# Futsal Manager — API

> API REST para gerenciamento de campeonatos de futsal — desenvolvida em JavaScript com Node.js e Express.

![Node.js](https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-5-black?style=for-the-badge&logo=express)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)

## Acesso

API em producao: https://campeonato-futsal-api.onrender.com

Frontend: https://campeonato-futsal-frontend.vercel.app

---

## Sobre o Projeto

API REST completa para gerenciamento de campeonatos de futsal. Gerencia campeonatos, times, jogadores e partidas, calculando pontos e estatísticas automaticamente.

---

## Funcionalidades

- Criar e listar campeonatos
- Cadastrar e listar times com pontuacao automatica
- Cadastrar e listar jogadores com estatisticas
- Registrar partidas com calculo automatico de pontos
- Sumula com gols e cartoes por jogador
- Artilharia ordenada por gols

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Node.js | Runtime JavaScript |
| Express 5 | Framework HTTP |
| Jest | Testes unitarios |
| Nodemon | Hot reload em desenvolvimento |

---

## Estrutura do Projeto

    src/
      controllers/
        championshipController.js
        teamController.js
        playerController.js
        matchController.js
      services/
        championshipService.js
        teamService.js
        playerService.js
        matchService.js
      routes/
        championshipRoutes.js
        teamRoutes.js
        playerRoutes.js
        matchRoutes.js
      utils/
        rules.js
      data/
        database.json
      server.js

---

## Como Rodar Localmente

**Pré-requisitos:** Node.js 18+

    git clone https://github.com/rlkgutomv/campeonato-futsal-api.git
    cd campeonato-futsal-api/campeonato-futsal-api
    npm install
    node src/server.js

API disponivel em http://localhost:3000

---

## Rotas da API

    GET    /api/championships
    POST   /api/championships        body: { name }

    GET    /api/teams?championshipId=
    POST   /api/teams                body: { name, coach, championshipId }

    GET    /api/players?championshipId=
    POST   /api/players              body: { name, teamId, shirtNumber, championshipId }

    GET    /api/matches?championshipId=
    POST   /api/matches              body: { championshipId, team1Id, team2Id, score1, score2, playerStats }

playerStats: [{ playerId, playerName, goals, yellowCards, redCards }]

---

## Testes

    npm test

---

## Disciplina

**PROJETO, DESIGN E ENGENHARIA DE PROCESSOS (CCOM5N)**
Curso de Ciência da Computação — Professor Hiago Oliveira
