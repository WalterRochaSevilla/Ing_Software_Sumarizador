//import sumarizador from "./sumarizador";
import mostrador_items from "./items";
import precio_neto from "./precio_neto";
import precio from "./precio";
import ciudad from "./ciudad";
import impuesto_estado from "./impuesto_estado";

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
    });it("deberia devolver ciudad", () => {
        expect(impuesto_estado("CA")).toEqual("8.25%");
    });
    it("deberia devolver ciudad", () => {
      expect(impuesto_estado("UT")).toEqual("6.65%");
    });
    it("deberia devolver ciudad", () => {
      expect(impuesto_estado("NV")).toEqual("8.00%");
    });  
    it("deberia devolver ciudad", () => {
      expect(impuesto_estado("TX")).toEqual("6.25%");
    });
    it("deberia devolver ciudad", () => {
      expect(impuesto_estado("AL")).toEqual("4.00%");
    });
    it("deberia devolver ciudad", () => {
      expect(impuesto_estado("UT")).toEqual("6.65%");
    });
  });
  