/* Abrir e fechar menu */
var menuButton = document.getElementById('menu-button');
var menu = document.getElementById('menu');

menuButton.addEventListener('click', function () {
    if (menu.style.left === '0px') { /* Alterado para verificar a posição left ao invés de display */
        menu.style.left = '-300px'; /* Fecha a barra lateral */
        menuButton.style.left = '310px';
    } else {
        menu.style.left = '0px'; /* Abre a barra lateral */
        menuButton.style.left = '180px';
    }
});

/* copiar gmail */
function copiargmail(){
    navigator.clipboard.writeText("rafaelfurtado313@gmail.com");
    alert("Gmail copiado!")
}

/*click whazap*/
var whazapi = document.getElementById('whazap');

whazapi.addEventListener('click', function () {
    location.href = "https://wa.me/985979676"
});

//Menu perfil
document.getElementById('user-icon').addEventListener('click', function() {
    var menuperfil = document.querySelector('.menuperfil');
    if (menuperfil.style.top === '50px') {
        menuperfil.style.top = '-150px';
    } else {
        menuperfil.style.top = '50px';
    }
});

/* Scroll lateral */
const scrollLugar = document.getElementById('lugarscroll');

scrollLugar.addEventListener('wheel', function(event) {
    event.preventDefault();
    scrollLugar.scrollLeft += event.deltaY; // Move horizontal scroll by the amount of vertical scroll
});

/*click da imagem*/
/*click casa*/
var clickcasa = document.getElementById('botaocasa');

clickcasa.addEventListener('click', function () {
    location.href = "ajudacasa.html"
});
/*click empresa*/
var clickempresa = document.getElementById('botaoempresa');

clickempresa.addEventListener('click', function () {
    location.href = "#"
});
/*click loja*/
var clickloja = document.getElementById('botaoloja');

clickloja.addEventListener('click', function () {
    location.href = "#"
});
/*click reforma*/
var clickreforma = document.getElementById('botaoreforma');

clickreforma.addEventListener('click', function () {
    location.href = "#"
});
/*click pintura*/
var clickpintura = document.getElementById('botaopintura');

clickpintura.addEventListener('click', function () {
    location.href = "ajudapintura.html"
});
/*click mudanca*/
var clickmudanca = document.getElementById('botaomudanca');

clickmudanca.addEventListener('click', function () {
    location.href = "ajudamudanca.html"
});