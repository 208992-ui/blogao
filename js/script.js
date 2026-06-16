const btnDark = document.getElementById("btnDark");
btnDark.addEventListener("click", alternarTema);
function alternarTema() {
  document.body.classList.toggle("claro");
}





let tamanhoFonte = 100;
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

btnMais.addEventListener("click", aumentarFonte);
btnMenos.addEventListener("click", diminuirFonte);

function aumentarFonte() {
  tamanhoFonte = tamanhoFonte + 10;
  document.body.style.fontSize = tamanhoFonte + "%";
}

function diminuirFonte() {
  tamanhoFonte = tamanhoFonte - 10;
  document.body.style.fontSize = tamanhoFonte + "%";
}






const formContato = document.getElementById("formContato");
formContato?.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
  evento.preventDefault();
  formContato.reportValidity();
}
