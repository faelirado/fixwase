/*voltar pro inicio*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "index.html";
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona os inputs
  const emailInput = document.getElementById('usuarioEmail');
  const senhaInput = document.getElementById('usuarioSenha');
  const lembrarCheck = document.getElementById('checkLembrar');
  
  // Seleciona o botao de cadastro
  const login = document.querySelector('.btnlogin');
  
  // Carregar email salvo
  const savedEmail = localStorage.getItem('valor-email');
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  
  // Salvar o texto no Local Storage quando o botão for clicado
  login.addEventListener('click', (e) => {

    var textoGmail = emailInput.value;
  
    if (textoGmail.includes("@gmail.com")) {
      // Limpa qualquer mensagem de erro anterior
      emailInput.setCustomValidity("");
      // Salvar a escolha de lembrar login
      if (lembrarCheck.checked) {
        localStorage.setItem('lembrar-login', 'sim');
      } else {
        localStorage.setItem('lembrar-login', 'nao');
      }
    } else {
      // Define a mensagem de erro e exibe no campo
      emailInput.setCustomValidity("Por favor insira um email válido.");
      emailInput.reportValidity();  // Mostra a mensagem de erro
      
      // Impede o envio do formulário
      e.preventDefault();
    }

  });
});

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