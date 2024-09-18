// Abrir e fechar menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const titulo = document.querySelector('.titulo');
const titulomenu = document.querySelector('.tituloMenu');

menuButton.addEventListener('click', function () {
    if (menu.style.left === '0px') { /* Alterado para verificar a posição left ao invés de display */
        titulo.style.opacity = '1';
        titulomenu.style.opacity = '0';
        menu.style.left = '-300px'; /* Fecha a barra lateral */
        menuButton.style.left = '10px';
    } else {
        titulo.style.opacity = '0';
        titulomenu.style.opacity = '1';
        menu.style.left = '0px'; /* Abre a barra lateral */
        menuButton.style.left = '180px';
    }
});

// Fecha o menu do perfil ao clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuButton.contains(event.target) || menu.contains(event.target);
    
    if (!isClickInsideMenu) {
        menu.style.left = '-300px'; /* Fecha a barra lateral */
        menuButton.style.left = '10px';
        titulo.style.opacity = '1';
    }
});

/*vai pra index caso não tiver conta*/

window.onload = function() {

    // Carregar email salvo
    const savedEmail = localStorage.getItem('valor-email');
    if (savedEmail === null || savedEmail === "") {

        location.href = "index.html";

    }
};

//copiar gmail
function copiargmail(){
    navigator.clipboard.writeText("rafaelfurtado313@gmail.com");
    alert("Gmail copiado!")
}

//click whazap
var whazapi = document.getElementById('whazap');

whazapi.addEventListener('click', function () {
    location.href = "https://wa.me/985979676"
});

// elementos do menu do perfil
const userIcon = document.getElementById('user-icon');
const menuPerfil = document.querySelector('.menuperfil');

// menu perfil
document.getElementById('user-icon').addEventListener('click', function() {
    if (menuPerfil.style.top === '50px') {
        menuPerfil.style.top = '-150px';
    } else {
        menuPerfil.style.top = '50px';
    }
});

/*desloga da conta*/

// menu perfil
document.getElementById('deslogar').addEventListener('click', function() {
    localStorage.setItem('image', '');
    localStorage.setItem('valor-nome', '');
    localStorage.setItem('valor-email', '');
    localStorage.setItem('valor-senha', '');
    localStorage.setItem('lembrar-login', '');
});

// Fecha o menu do perfil ao clicar fora dele
document.addEventListener('click', function(event) {
  const isClickInsidePerfil = userIcon.contains(event.target) || menuPerfil.contains(event.target);

  if (!isClickInsidePerfil) {
    menuPerfil.style.top = '-150px';
  }
});

// Scroll lateral servicos
const scrollServicos = document.getElementById('lugarscroll');

scrollServicos.addEventListener('wheel', function(event) {
    event.preventDefault();
    scrollServicos.scrollLeft += event.deltaY; // Move horizontal scroll by the amount of vertical scroll
});

// Scroll lateral avaliacao
const scrollAvaliacoes = document.getElementById('imagensCliente');

scrollAvaliacoes.addEventListener('wheel', function(event) {
    event.preventDefault();
    scrollAvaliacoes.scrollLeft += event.deltaY; // Move horizontal scroll by the amount of vertical scroll
});

/*---click servicos---*/

const container = document.querySelector('.lugar_servicos');
  
container.addEventListener('click', function(event) {
  // O event.target é o elemento que foi clicado
  const elementoClicado = event.target.closest('.divservicos');
  
  // Verifique se o clique foi em um elemento com a classe 'divservicos'
  if (elementoClicado) {
    const idBotao = elementoClicado.id;

    // Verifique se o id foi capturado corretamente
    if (idBotao) {
      // Redireciona para o arquivo HTML correspondente
      window.location.href = `${idBotao}.html`; /*pega o id do botao serviço e redireciona com o valor do id*/
    } else {
      console.log('ID de pag não encontrado');
    }
  }

});