const voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "logado.html";
  });
}

//testa as mensagens

const titulo = document.querySelector('.titulo');

if (titulo) {
  titulo.addEventListener('click', function () {
    let semServicos = document.querySelector("#servicosRecentes #semRecentes")
    let servicos = document.querySelectorAll("#servicoRecente")
    if(semServicos.style.display == "block"){
      semServicos.style.display = "none"
      for(var servico of servicos){
        servico.style.display = "block"
      }
    }
    else{
      semServicos.style.display = "block"
      for(var servico of servicos){
        servico.style.display = "none"
      }
    }
  });
}