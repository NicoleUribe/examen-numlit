import numeros from "./literalizar.js";
const num=new numeros();
describe("literalizar numeros", () => {
  it("1.si ingreso 0 debe devolver 'cero'", () => {
    expect(num.literal(0)).toEqual("cero");
  });
});
