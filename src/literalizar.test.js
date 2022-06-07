import numeros from "./literalizar.js";
const num=new numeros();
describe("literalizar numeros", () => {
  it("1.si ingreso 0 debe devolver 'cero'", () => {
    expect(num.literal(0)).toEqual("cero");
  });
  it("2.si ingreso 1 debe devolver 'uno'", () => {
    expect(num.literal(1)).toEqual("uno");
  });
  it("3.si ingreso 2 debe devolver 'dos'", () => {
    expect(num.literal(2)).toEqual("dos");
  });
  it("4.si ingreso 10 debe devolver 'diez'", () => {
    expect(num.literal(10)).toEqual("diez");
  });
  it("5.si ingreso 15 debe devolver 'quince'", () => {
    expect(num.literal(15)).toEqual("quince");
  });
});
