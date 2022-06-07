import fs from "fs";
describe("literalizar html", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });  
  it("1.html si ingreso 0 me devuelve 'cero' ", () => {
    const num = document.querySelector("#numero");
    num.value=0;
    const boton = document.querySelector("#botonliteral");
    boton.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("cero");
  });

  it("2.html si ingreso 1 me devuelve 'uno' ", () => {
    const num = document.querySelector("#numero");
    num.value=1;
    const boton = document.querySelector("#botonliteral");
    boton.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("uno");
  });
  
});