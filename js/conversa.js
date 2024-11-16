/*botao voltar*/
const voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "chats.html";
  });
}

let nomeConversa = localStorage.getItem("nomeConversa")
document.getElementById("nomeChat").textContent = nomeConversa
window.onload = ()=>{
}