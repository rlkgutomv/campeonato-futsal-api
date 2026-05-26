const createPlayer = (name, shirtNumber, teamId) => {
    if (!name) throw new Error("Nome do jogador é obrigatório!");
    if (!teamId) throw new Error("O jogador precisa de um time!");
    
    return {
        id: "player-456",
        name,
        shirtNumber: Number(shirtNumber) || 0,
        teamId,
        goals: 0,
        yellowCards: 0,
        redCards: 0
    };
};

describe("Testes de Jogador", () => {
    test("Deve criar um jogador zerado (sem gols ou cartões) no time certo", () => {
        const jogador = createPlayer("João Artilheiro", 10, "team-123");
        
        expect(jogador.name).toBe("João Artilheiro");
        expect(jogador.teamId).toBe("team-123");
        expect(jogador.goals).toBe(0);
        expect(jogador.yellowCards).toBe(0);
        expect(jogador.redCards).toBe(0);
    });

    test("Deve converter o número da camisa para número (Number)", () => {
        const jogador = createPlayer("Marcos", "7", "team-123");
        expect(typeof jogador.shirtNumber).toBe("number");
        expect(jogador.shirtNumber).toBe(7);
    });
});