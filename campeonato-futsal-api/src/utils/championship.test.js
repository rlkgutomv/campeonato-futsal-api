const createChampionship = (name) => {
    if (!name) throw new Error("O nome do campeonato é obrigatório!");
    return {
        id: Math.random().toString(36).substring(2, 9), 
        name: name,
        createdAt: new Date()
    };
};

describe("Testes de Campeonato", () => {
    test("Deve criar um campeonato com sucesso se tiver nome", () => {
        const campeonato = createChampionship("Copa de Futsal 2026");
        
        expect(campeonato).toHaveProperty("id");
        expect(campeonato.name).toBe("Copa de Futsal 2026");
    });

    test("Deve dar erro se tentar criar campeonato sem nome", () => {
        expect(() => createChampionship("")).toThrow("O nome do campeonato é obrigatório!");
    });
});