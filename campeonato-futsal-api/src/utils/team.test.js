const createTeam = (name, coach, championshipId) => {
    if (!name) throw new Error("Nome do time é obrigatório!");
    if (!championshipId) throw new Error("O time precisa pertencer a um campeonato!");
    
    return {
        id: "team-123",
        name,
        coach: coach || "Sem Técnico",
        championshipId,
        points: 0,
        goals: 0
    };
};

describe("Testes de Time", () => {
    test("Deve criar um time vinculado a um campeonato", () => {
        const time = createTeam("Guerreiros FC", "Carlos", "champ-999");
        
        expect(time.name).toBe("Guerreiros FC");
        expect(time.championshipId).toBe("champ-999");
        expect(time.points).toBe(0); // Times novos começam com 0 pontos
    });

    test("Deve falhar se tentar criar time sem ID do campeonato", () => {
        expect(() => createTeam("Guerreiros FC", "Carlos", "")).toThrow("O time precisa pertencer a um campeonato!");
    });
});