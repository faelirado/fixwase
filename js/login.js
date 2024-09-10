/*voltar pro inicio*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "index.html";
  });
}

//ver senha escrita
const olhoIcon = document.querySelector('.toggle-password')
const inputSenha = document.getElementById('usuarioSenha')

function olharSenha() {
    olhoIcon.style.visibility = "visible";
  }

function togglePassword() {
    var passwordInput = document.getElementById("usuarioSenha");
    var verSenha = document.getElementById("olho");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      verSenha.className = "fa-solid fa-eye"
    } else {
      passwordInput.type = "password";
      verSenha.className = "fa-solid fa-eye-slash"
    }
  }

  // olhinho some ao clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInsideInput = olhoIcon.contains(event.target) || inputSenha.contains(event.target);
  
    if (!isClickInsideInput) {
        olhoIcon.style.visibility = "hidden";
    }
  });