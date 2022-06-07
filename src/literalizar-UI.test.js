import fs from "fs";
import literal from "./literalizar"
const lit = new literal();
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
  it("3.html si ingreso numeros del 3 al 9 me devuelve 'uno' ", () => {
      for(var i=3;i<10;i++){
        const num = document.querySelector("#numero");
        num.value=i;
        const boton = document.querySelector("#botonliteral");
        boton.click();
    
        const resultado = document.querySelector("#resultado-div");
        expect(resultado.innerHTML).toEqual(lit.literal(i));
      }

  });
});