import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true pra [1, 2 ,1]", () => {
        const resultado = checaItensDuplicados([1, 2 ,1]);
    
        expect(resultado).toEqual(true);
      });
    test('retorna false pra ["a", "d", "e", "f"]', () => {
    const resultado = checaItensDuplicados(["a", "d", "e", "f"]);

    expect(resultado).toEqual(false);
    });
    test("retorna false pra []", () => {
    const resultado = checaItensDuplicados([]);

    expect(resultado).toEqual(false);
    });
    test('retorna true pra ["a", "a", "b", "c"]', () => {
    const resultado = checaItensDuplicados(["a", "a", "b", "c"]);

    expect(resultado).toEqual(true);
    });
});
