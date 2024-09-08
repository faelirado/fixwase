/*botao voltar*/
var voltar = document.getElementById('backi');

voltar.addEventListener('click', function () {
    location.href = "logado.html"
});

// Adiciona o eventListener para mostrar/esconder o escolhefoto ao clicar na imagem do usuário
document.querySelector('.user-image').addEventListener('click', function() {
    const escolhefoto = document.querySelector('.escolhefoto');
    
    // Verifica se o escolhefoto está atualmente visível
    if (escolhefoto.style.display === 'flex') {
        escolhefoto.style.display = 'none';
    } else {
        escolhefoto.style.display = 'flex';
    }
});

// Oculta o escolhefoto quando o clique é fora dele, mas não se for no <p> dentro dele
document.addEventListener('click', function(event) {
    const escolhefoto = document.querySelector('.escolhefoto');
    const pTag = document.getElementById('escolhefotolbl');
    const userImage = document.querySelector('.user-image');

    // Verifica se o clique foi fora do escolhefoto e da imagem do usuário
    if (!escolhefoto.contains(event.target) && event.target !== userImage && !pTag.contains(event.target)) {
        escolhefoto.style.display = 'none';
    }
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


//-----------------------------------------------
const salvarAlt = document.getElementById('savebtn');

// Seleciona o input de arquivo e a imagem de usuário
const fileInput = document.getElementById('fileInput');
const imagemUser = document.querySelector('.user-image');

// Seleciona o input de nome
const nomeInput = document.getElementById('usuarioNome');

// Seleciona o input de email
const emailInput = document.getElementById('usuarioEmail');

// Seleciona o input de senha
const senhaInput = document.getElementById('usuarioSenha');

// Carregar imagem e nome do Local Storage, se existirem
window.onload = function() {

    // Carregar imagem salva
    const imagemSalva = localStorage.getItem('image');
    if (imagemSalva) {

        imagemUser.src = imagemSalva;
    }

    // Carregar nome salvo
    const savedNome = localStorage.getItem('valor-nome');
    if (savedNome) {

        nomeInput.value = savedNome;
    }

    // Carregar email salvo
    const savedEmail = localStorage.getItem('valor-email');
    if (savedEmail) {

        emailInput.value = savedEmail;
    }

    // Carregar email salvo
    const savedSenha = localStorage.getItem('valor-senha');
    if (savedSenha) {

        senhaInput.value = savedSenha;
    }
};

// Manipula a seleção de uma nova imagem
fileInput.addEventListener('change', function(event) {
    
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        
        const reader = new FileReader();
        reader.onload = function(e) {
            
            const imageURL = e.target.result;
            imagemUser.src = imageURL;
            
            // Salva a imagem no Local Storage ao clicar no botão
            salvarAlt.addEventListener('click', () => {
                localStorage.setItem('image', imageURL);
            });
        };
        reader.readAsDataURL(file);
    } else {
        alert('Erro ao selecionar foto, selecione um arquivo de imagem.');
    }
});

// Salva o nome e email no Local Storage ao clicar no botão
salvarAlt.addEventListener('click', () => {
    
    const valorNome = nomeInput.value;
    localStorage.setItem('valor-nome', valorNome);

    const valorEmail = emailInput.value;
    localStorage.setItem('valor-email', valorEmail);

    const valorSenha = senhaInput.value;
    localStorage.setItem('valor-senha', valorSenha);
});

//animação de salvar
document.getElementById('savebtn').addEventListener('click', function() {
    var button = this;
  
    // Adiciona a classe 'loading' e inicia o carregamento
    button.classList.add('onclic');
  
    // Simula um tempo de carregamento (ex: 2 segundos)
    setTimeout(function() {
      // Remove a classe 'loading' e adiciona 'success' para exibir o check
      button.classList.remove('onclic');
      button.classList.add('validate');
    }, 1750);
  
    // Simula um tempo de carregamento (ex: 2 segundos)
    setTimeout(function() {
      // Remove a classe 'loading' e adiciona 'success' para exibir o check
      button.classList.remove('validate');
    }, 2900);
  });

// Impede a atualização da página
document.getElementById('espaco_mudancas').addEventListener('submit', function(e) {
  e.preventDefault();
});