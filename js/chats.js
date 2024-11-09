//volta a pag
const voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    window.history.back();
  });
}

//clique em alguma mensagem
const mensagens = document.querySelectorAll('#mensagem');

mensagens.addEventListener('click', function (mensagem) {
  localStorage.setItem("nomeConversa",mensagem.getElementById("nomeCliente").textContent) //nao ta funcionando !!!
  window.location.href = "conversa.html"
});

// if (mensagens) {
//   for(var mensagem of mensagens){
//     mensagem.addEventListener('click', function () {
//       localStorage.setItem("nomeConversa",mensagem.getElementById("nomeCliente").textContent)
//       window.location.href = "conversa.html"
//     });
//   }
// }

//testa as mensagens

const titulo = document.querySelector('.titulo');

if (titulo) {
  titulo.addEventListener('click', function () {
    let semMensagens = document.querySelector("#mensagens #semMensagens")
    let mensagens = document.querySelectorAll("#mensagem")
    if(semMensagens.style.display == "block"){
      semMensagens.style.display = "none"
      for(var mensagem of mensagens){
        mensagem.style.display = "block"
      }
    }
    else{
      semMensagens.style.display = "block"
      for(var mensagem of mensagens){
        mensagem.style.display = "none"
      }
    }
  });
}

// nao ta indo por causa do erro das msg

//mais notif que 99 fica 99+
const qntNotifs = document.querySelectorAll("#qntNotifs")

for (const notif of qntNotifs){
  if(notif.textContent > 99){
    notif.textContent = "+99"
  }
  if(notif.textContent == 0){
    notif.style.display = "none"
  }
}

/*pesquisar*/
function pesquisar() {
  // Pega o valor da barra de pesquisa
  let input = document.getElementById('barraProcurar').value.toLowerCase();
  
  // Seleciona todos os elementos com id "nomeProduto"
  let mensagens = document.querySelectorAll('#mensagem');
  
  // Loop por todos os mensagens
  mensagens.forEach(function(product) {
      // Pega o texto do nome do produto
      let nomeProduto = product.querySelector('#nomeCliente').textContent.toLowerCase();

      // Verifica se o nome do produto contém o texto digitado
      if (nomeProduto.includes(input)) {
          product.style.display = 'block'; // Exibe o produto
      } else {
          product.style.display = 'none'; // Esconde o produto
      }
  });
}