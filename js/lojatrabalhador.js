/*botao voltar*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "telatrabalhador.html";
  });
}

/*numero carrinho*/
var numCarrinho = document.getElementById('numCarrinho');

if (numCarrinho.textContent == 0) {
  numCarrinho.style.display = "none"
}

if (numCarrinho.textContent >= 10) {
  numCarrinho.textContent = "+9"
}