export function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letter, i) {
    setTimeout(function () {
      elemento.innerHTML += letter;
    }, 40 * i);
  });
}