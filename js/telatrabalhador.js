// icone voltar
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "logado.html";
  });
}

// icone chat
var chat = document.getElementById('chat');

if (chat) {
  chat.addEventListener('click', function () {
    location.href = "trabalhadorchat.html";
  });
}

// comprar materiais
var loja = document.querySelector('.divloja');

if (loja) {
  loja.addEventListener('click', function () {
    location.href = "lojatrabalhador.html";
  });
}

/*---anotacao---*/

// icone anotacoes
var botaoanotacoes = document.getElementById('botaoanotacoes');
var menuanotacoes = document.getElementById('menuanotacoes');

if (botaoanotacoes) {
  botaoanotacoes.addEventListener('click', function () {
    if(menuanotacoes.style.display === "flex"){
      menuanotacoes.style.left = "-50%";
      setTimeout(()=> {
        menuanotacoes.style.display = "none";
    }, 100);
    }
    else{
      menuanotacoes.style.display = "flex";
      setTimeout(()=> {
        menuanotacoes.style.left = "50%";
    }, 100);
    }
  });
}

// Fecha o menu de anotacoes ao clicar fora dele
document.addEventListener('click', function(event) {
  const isClickInsideAnotacoes = botaoanotacoes.contains(event.target) || menuanotacoes.contains(event.target);
  
  if (!isClickInsideAnotacoes) {
    menuanotacoes.style.display = "none";
  }
});

var anotacao = document.getElementById('anotacoes')

const anotacaoArmazenada = localStorage.getItem('anotacao')

if(anotacaoArmazenada){
  anotacao.value = anotacaoArmazenada
}

function salvaranotacao(){

  if(anotacao.value === "" || anotacao.value === null){
    localStorage.removeItem('anotacao')
  }
  else {
    localStorage.setItem('anotacao', anotacao.value)
  }
}

/*---------------------------------------------------------------------*/

/*---menu de seguranca---*/

// icone seguranca
var seguranca = document.getElementById('protecao');
var menuseguranca = document.getElementById('menuprotecao');

if (seguranca) {
  seguranca.addEventListener('click', function () {
    if(menuseguranca.style.display === "block"){
      menuseguranca.style.left = "-50%";
      setTimeout(()=> {
        menuseguranca.style.display = "none";
    }, 100);
  }
  else{
    menuseguranca.style.display = "block";
    setTimeout(()=> {
      menuseguranca.style.left = "50%";
    }, 100);
  }
  });
}

// Fecha o menu da protecao ao clicar fora dele
document.addEventListener('click', function(event) {
  const isClickInsideProtecao = seguranca.contains(event.target) || menuseguranca.contains(event.target);
  
  if (!isClickInsideProtecao) {
    menuseguranca.style.left = "-50%";
    setTimeout(()=> {
      menuseguranca.style.display = "none";
    }, 100);
  }
});

/*---------------------------------------------------------------------*/

/*---menu baixo---*/

// Select DOM elements
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

// Global variables for tracking drag events
let isDragging = false, startY, startHeight;

const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
}

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
}

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height) || 2;
    bottomSheet.classList.add("dragging");
    document.body.classList.add("no-scroll");
}

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
}

// Determines whether to hide, set to fullscreen, or set to default 
// height based on the current height of the sheet content
const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    document.body.classList.remove("no-scroll");
    const sheetHeight = parseInt(sheetContent.style.height);
    if (sheetHeight > 25) {
        updateSheetHeight(50); // Mantém o menu aberto
    } else {
        updateSheetHeight(2); // Fecha o menu
    }
}

sheetContent.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

sheetContent.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);

/*---------------------------------------------------------------------*/