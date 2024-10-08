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

/*pesquisar*/
function pesquisar() {
  // Pega o valor da barra de pesquisa
  let input = document.getElementById('barraProcurar').value.toLowerCase();
  
  // Seleciona todos os elementos com id "nomeProduto"
  let produtos = document.querySelectorAll('#produto');
  
  // Loop por todos os produtos
  produtos.forEach(function(product) {
      // Pega o texto do nome do produto
      let nomeProduto = product.querySelector('#nomeProduto').textContent.toLowerCase();

      // Verifica se o nome do produto contém o texto digitado
      if (nomeProduto.includes(input)) {
          product.style.display = 'block'; // Exibe o produto
      } else {
          product.style.display = 'none'; // Esconde o produto
      }
  });
}

// icone filtro
var iconfiltro = document.getElementById('filtro');
var menufiltro = document.getElementById('filtroMenu');

if (iconfiltro) {
  iconfiltro.addEventListener('click', function () {
    if(menufiltro.style.display === "block"){
      menufiltro.style.display = "none";
    }
    else{
      menufiltro.style.display = "block";
    }
  });
}

// Fecha o menu da protecao ao clicar fora dele
document.addEventListener('click', function(event) {
  const isClickInsideFiltro = iconfiltro.contains(event.target) || menufiltro.contains(event.target);
  
  if (!isClickInsideFiltro) {
    menufiltro.style.display = "none";
  }
});