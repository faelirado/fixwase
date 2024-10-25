/*botao voltar*/
const voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "conta.html";
  });
}