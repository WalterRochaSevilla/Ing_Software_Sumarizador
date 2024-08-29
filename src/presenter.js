import sumarizador from "./sumarizador";

const Precio = document.querySelector("#precio");
// const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumarizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const valorPrecio = Number.parseInt(Precio.value);
  // const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumarizador(valorPrecio) + "</p>";
});
