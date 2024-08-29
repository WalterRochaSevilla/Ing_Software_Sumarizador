import sumarizador from "./sumarizador";

describe("Sumarizador", () => {
    it("deberia devolver Precio", () => {
      expect(sumarizador(500)).toEqual(500);
    });
  });
  