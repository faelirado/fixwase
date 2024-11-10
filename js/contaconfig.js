/*botao voltar*/
const voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "conta.html";
  });
}
const confirmarSaida = document.getElementById("confirmarSaida")

document.getElementById("sairConta").addEventListener("click",()=>{
  confirmarSaida.style.display = "block"
})

document.querySelector("#confirmarSaida #sim").addEventListener("click",()=>{
  confirmarSaida.style.display = "none"
  localStorage.setItem('image', '');
  localStorage.setItem('valor-nome', '');
  localStorage.setItem('valor-email', '');
  localStorage.setItem('valor-senha', '');
  localStorage.setItem('lembrar-login', '');
  location.href = "index.html";
})

document.querySelector("#confirmarSaida #nao").addEventListener("click",()=>{
  confirmarSaida.style.display = "none"
})

// Fecha o menu de confirmar ao clicar fora dele
document.addEventListener('click', function(event) {
  const isClickInsideConfirmarSaida = confirmarSaida.contains(event.target) || document.getElementById("sairConta").contains(event.target);
  
  if (!isClickInsideConfirmarSaida) {
    confirmarSaida.style.display = "none"
  }
});