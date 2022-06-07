import fs from "fs";
describe("literalizar html", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });  
  it("si ingreso 0 me devuelve 'cero' ", () => {
    const num = document.querySelector("#numero");
    num.value=0;
    const boton = document.querySelector("#botonliteral");
    boton.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("cero");
  });

});