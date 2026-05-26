import { calculatePoints } from './rules.js';

describe("Testes da Regra de Negócio do Futsal", () => {
    
    test("Deve dar 3 pontos para o Time 1 se ele fizer mais gols", () => {
        const resultado = calculatePoints(5, 2);
        expect(resultado.points1).toBe(3);
        expect(resultado.points2).toBe(0);
    });

    test("Deve dar 3 pontos para o Time 2 se ele fizer mais gols", () => {
        const resultado = calculatePoints(1, 4);
        expect(resultado.points1).toBe(0);
        expect(resultado.points2).toBe(3);
    });

    test("Deve dar 1 ponto para cada time em caso de empate", () => {
        const resultado = calculatePoints(3, 3);
        expect(resultado.points1).toBe(1);
        expect(resultado.points2).toBe(1);
    });

});