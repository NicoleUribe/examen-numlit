import literal from "./literalizar";


const num = document.querySelector("#numero");
const form = document.querySelector("#literalizar-form");
const div = document.querySelector("#resultado-div");
const lit = new literal();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numlit = Number.parseInt(num.value);
  let respuesta = lit.literal(numlit);  
  div.innerHTML = respuesta  
});
