/*botao voltar*/
const voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "logado.html";
  });
}

/*botao config*/
const config = document.getElementById('config');

if (config) {
  config.addEventListener('click', function () {
    location.href = "contaconfig.html";
  });
}

/*botoes pags*/
const perfil = document.getElementById('perfil');
const pagamentos = document.getElementById('pagamentos');
const ajuda = document.getElementById('ajuda');
const espaco_perfil = document.getElementById('espaco_perfil');
const espaco_pagamentos = document.getElementById('espaco_pagamentos');
const espaco_ajuda = document.getElementById('espaco_ajuda');

if (perfil) {
  perfil.addEventListener('click', function () {
    espaco_perfil.style.display = "block"
    perfil.style.border = "1px #0d7ea7 solid"
    perfil.style.backgroundColor = "var(--cor-hover-botao)"

    espaco_ajuda.style.transform = "translateX(240%)"
    ajuda.style.border = 0
    ajuda.style.backgroundColor = "var(--cor-btns-pags)"

    espaco_pagamentos.style.transform = "translateX(120%)"
    pagamentos.style.border = 0
    pagamentos.style.backgroundColor = "var(--cor-btns-pags)"
    setTimeout(()=>{
      espaco_pagamentos.style.display = "none"
      espaco_ajuda.style.display = "none"
      espaco_perfil.style.transform = "translateX(-50%)"
    },1001)
  });
}

if (pagamentos) {
  pagamentos.addEventListener('click', function () {
    pagamentos.style.border = "1px #0d7ea7 solid"
    pagamentos.style.backgroundColor = "var(--cor-hover-botao)"
    espaco_pagamentos.style.display = "block"

    espaco_ajuda.style.transform = "translateX(120%)"
    ajuda.style.border = 0
    ajuda.style.backgroundColor = "var(--cor-btns-pags)"
    
    espaco_perfil.style.transform = "translateX(-200%)"
    perfil.style.border = 0
    perfil.style.backgroundColor = "var(--cor-btns-pags)"
    setTimeout(()=>{
      espaco_perfil.style.display = "none"
      espaco_ajuda.style.display = "none"
      espaco_pagamentos.style.transform = "translateX(0)"
    },1001)
  });
}

if (ajuda) {
  ajuda.addEventListener('click', function () {
    espaco_ajuda.style.display = "block"
    ajuda.style.backgroundColor = "var(--cor-hover-botao)"
    ajuda.style.border = "1px #0d7ea7 solid"

    espaco_perfil.style.transform = "translateX(-240%)"
    perfil.style.border = 0
    perfil.style.backgroundColor = "var(--cor-btns-pags)"
    
    espaco_pagamentos.style.transform = "translateX(-120%)"
    pagamentos.style.border = 0
    pagamentos.style.backgroundColor = "var(--cor-btns-pags)"
    setTimeout(()=>{
      espaco_perfil.style.display = "none"
      espaco_pagamentos.style.display = "none"
      espaco_ajuda.style.transform = "translateX(0)"
    },1001)
  });
}

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

      //tira o escolhe perfil depois de escolher
      const escolhefoto = document.querySelector('.escolhefoto');
      escolhefoto.style.display = 'none';
        
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

// Salva o nome e email no Local Storage ao clicar no botão e animação de salvar

salvarAlt.addEventListener('click', function(e) {
  var button = this;

  var textoGmail = emailInput.value;
  
  // Se o email contém "@gmail.com"
  if (textoGmail.includes("@gmail.com")) {
    
    // Limpa a mensagem de erro se o email for válido
    emailInput.setCustomValidity("");
    
    const valorNome = nomeInput.value;
    localStorage.setItem('valor-nome', valorNome);
    
    const valorEmail = emailInput.value;
    localStorage.setItem('valor-email', valorEmail);
    
    const valorSenha = senhaInput.value;
    localStorage.setItem('valor-senha', valorSenha);
    
    // Adiciona a classe 'loading' e inicia o carregamento
    button.classList.add('onclic');
    
    setTimeout(function() {
      // Remove a classe 'loading' e adiciona 'validate' para exibir o check
      button.classList.remove('onclic');
      button.classList.add('validate');
    }, 1750);
    
    setTimeout(function() {
      // Remove a classe 'validate'
      button.classList.remove('validate');
    }, 2900);
    
  } else {
    // Define a mensagem de erro se o email não for válido
    emailInput.setCustomValidity("Por favor insira um email válido.");
    
    button.style.backgroundColor = "#c00000";
    button.style.border = "#c00000";
    
    setTimeout(function() {
      button.style.backgroundColor = "var(--cor-primaria)";
      button.style.border = "var(--cor-primaria)";
    }, 500);
    
    // Exibe a mensagem de erro no campo de email
    emailInput.reportValidity();
    
    e.preventDefault();  // Impede o envio do formulário
  }
});

// Impede a atualização da página ao enviar o formulário
document.getElementById('espaco_perfil').addEventListener('submit', function(e) {
  e.preventDefault();
});