//import sumarizador from "./sumarizador";
import mostrador_items from "./items";
import precio_neto from "./precio_neto";
import precio from "./precio";
import ciudad from "./ciudad";

describe("Sumarizador", () => {
    it("deberia devolver Precio", () => {
      expect(precio(500)).toEqual(500);
    });
    it("deberia devolver cantidad de items", () => {
      expect(mostrador_items(500)).toEqual(500);
    });
    it("deberia devolver precio neto", () => {
      expect(precio_neto(500, 10)).toEqual(5000);
    });
    it("deberia devolver ciudad", () => {
        expect(ciudad("NV")).toEqual("NV");
      });
  });
  