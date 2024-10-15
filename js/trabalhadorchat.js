var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "telatrabalhador.html";
  });
}

const qntNotifs = document.querySelectorAll("#qntNotifs")

for (const notif of qntNotifs){
  if(notif.textContent > 99){
    notif.textContent = "+99"
  }
}