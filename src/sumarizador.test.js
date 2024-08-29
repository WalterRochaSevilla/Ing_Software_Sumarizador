import sumarizador from "./sumarizador";
import mostrador_items from "./items";
import precio_neto from "./precio_neto";

describe("Sumarizador", () => {
    it("deberia devolver Precio", () => {
      expect(sumarizador(500)).toEqual(500);
    });
    it("deberia devolver cantidad de items", () => {
      expect(mostrador_items(500)).toEqual(500);
    });
    it("deberia devolver precio neto", () => {
      expect(precio_neto(500, 10)).toEqual(5000);
    });
  });
  