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
    const conferirsenha = document.getElementById('confimarsenha').value;
    let senhaDif = false;

    // verifica se a senha é a mesma

    if (senha == conferirsenha) {
        senhaDif = true;
    }

    // Se a senha é diferente, impede o envio do formulário
    if (!senhaDif) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('checksenha').className = "bx bx-x"
        setTimeout(() => {document.getElementById('checksenha').className = "";}, 2000);
    }
});

//salva o nome

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o input de nome
    const nomeInput = document.getElementById('usuarioNome');

    // Seleciona o input de email
    const emailInput = document.getElementById('usuarioEmail');

    // Seleciona o input de senha
    const senhaInput = document.getElementById('usuarioSenha');

    // Seleciona o check de lembrar login
    const lembrarCheck = document.getElementById('checkLembrar');

    const cadastro = document.querySelector('.btncadastrar');

    // Salvar o texto no Local Storage quando o botão for clicado
    cadastro.addEventListener('click', () => {

        const nomeValor = nomeInput.value;
        localStorage.setItem('valor-nome', nomeValor);

        const emailValor = emailInput.value;
        localStorage.setItem('valor-email', emailValor);

        const senhaValor = senhaInput.value;
        localStorage.setItem('valor-senha', senhaValor);

        if (lembrarCheck.checked) {
            localStorage.setItem('lembrar-login', 'sim');
          } else {
            localStorage.setItem('lembrar-login', 'nao');
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