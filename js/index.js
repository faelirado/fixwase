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

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuButton.contains(event.target) || menu.contains(event.target);
    
    if (!isClickInsideMenu) {
        menu.style.left = '-300px'; /* Fecha a barra lateral */
        menuButton.style.left = '10px';
        titulo.style.opacity = '1';
    }
  });

// Scroll lateral
const scrollLugar = document.getElementById('lugarscroll');

scrollLugar.addEventListener('wheel', function(event) {
    event.preventDefault();
    scrollLugar.scrollLeft += event.deltaY; // Move horizontal scroll by the amount of vertical scroll
});

// copiar gmail
function copiargmail(){
    navigator.clipboard.writeText("rafaelfurtado313@gmail.com");
    alert("Gmail copiado!")
}

//click whazap
var whazapi = document.getElementById('whazap');

whazapi.addEventListener('click', function () {
    location.href = "https://wa.me/985979676"
});

/*vai pra logado caso lembrar login true*/

window.onload = function() {

    // Carregar email salvo
    const lembrarLogin = localStorage.getItem('lembrar-login');
    if (lembrarLogin === "sim") {

        location.href = "logado.html";

    } else if (lembrarLogin === "nao"){
        localStorage.setItem('image', '');
        localStorage.setItem('valor-nome', '');
        localStorage.setItem('valor-email', '');
        localStorage.setItem('valor-senha', '');
    }
};

/*----click servicos----*/

/*click casa*/
var clickcasa = document.getElementById('botaocasa');

clickcasa.addEventListener('click', function () {
    location.href = "criarconta.html"
});

/*click empresa*/
var clickempresa = document.getElementById('botaoempresa');

clickempresa.addEventListener('click', function () {
    location.href = "criarconta.html"
});

/*click loja*/
var clickloja = document.getElementById('botaoloja');

clickloja.addEventListener('click', function () {
    location.href = "criarconta.html"
});

/*click reforma*/
var clickreforma = document.getElementById('botaoreforma');

clickreforma.addEventListener('click', function () {
    location.href = "criarconta.html"
});

/*click pintura*/
var clickpintura = document.getElementById('botaopintura');

clickpintura.addEventListener('click', function () {
    location.href = "criarconta.html"
});

/*click mudanca*/
var clickmudanca = document.getElementById('botaomudanca');

clickmudanca.addEventListener('click', function () {
    location.href = "criarconta.html"
});