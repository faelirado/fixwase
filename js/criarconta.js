/*voltar pro inicio*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "index.html";
  });
}

/*confere se a senha é a mesma*/
document.getElementById("cadastro").addEventListener("submit", function(event) {
    // Seleciona todos os checkboxes no formulário
    const senha = document.getElementById('usuarioSenha').value;
    const inputSenhaConf = document.getElementById('confimarsenha');
    const conferirsenha = document.getElementById('confimarsenha').value;
    let senhaDif = false;

    // verifica se a senha é a mesma

    if (senha == conferirsenha) {
        senhaDif = true;
    }

    inputSenhaConf.setCustomValidity('');

    // Se a senha é diferente, impede o envio do formulário
    if (!senhaDif) {
      inputSenhaConf.setCustomValidity("Confirmar senha incorreto.");
      event.preventDefault(); // Impede o envio do formulário
      document.getElementById('checksenha').className = "bx bx-x"
      setTimeout(() => {document.getElementById('checksenha').className = "";}, 2000);
    }
    inputSenhaConf.reportValidity();
});

//salva o nome
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona os inputs
  const nomeInput = document.getElementById('usuarioNome');
  const senhaInput = document.getElementById('usuarioSenha');
  const emailInput = document.getElementById('usuarioEmail');
  const lembrarCheck = document.getElementById('checkLembrar');
  
  // Seleciona o botao de cadastro
  const cadastro = document.querySelector('.btncadastrar');
  
  // Carregar email salvo
  const savedEmail = localStorage.getItem('valor-email');
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  
  // Salvar o texto no Local Storage quando o botão for clicado
  cadastro.addEventListener('click', (e) => {

    var textoGmail = emailInput.value;
  
    if (textoGmail.includes("@gmail.com")) {
      // Limpa qualquer mensagem de erro anterior
      emailInput.setCustomValidity("");

      // Salvar os dados no Local Storage
      const nomeValor = nomeInput.value;
      localStorage.setItem('valor-nome', nomeValor);

      const emailValor = emailInput.value;
      localStorage.setItem('valor-email', emailValor);

      const senhaValor = senhaInput.value;
      localStorage.setItem('valor-senha', senhaValor);

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