import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna true para 'osso'", () => {
    const ehPalindromo = checaPalindromo("osso");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna false para 'predio'", () => {
    const ehPalindromo = checaPalindromo("predio");
    expect(ehPalindromo).toEqual(false);
  });
});
