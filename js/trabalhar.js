/*voltar pro inicio*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "logado.html";
  });
}

/*confere se os inpputs estão preenchidos*/
document.getElementById("curriculo").addEventListener("submit", function(event) {

  const tela1 = document.querySelector('.tela1');
  const tela2 = document.querySelector('.tela2');
  
  if(window.getComputedStyle(tela1).display === "block"){
    event.preventDefault();
  
    var nomeInput = document.querySelector('#nome input')
    var emailInput = document.querySelector('#email input')
    var numtelInput = document.querySelector('#numtel input')

    nomeInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    numtelInput.setCustomValidity("");
      

    tela2.style.display = "block"
    tela1.style.transform = "translateX(-150dvw)"
    tela2.style.transform = "translateX(100%)"
    nomeInput.blur();
    emailInput.blur();
    numtelInput.blur();
    
    setTimeout(function() {
        tela1.style.display = "none"
        tela2.style.transform = "translateX(-50%)"
    }, 1400);
  }
  else if(window.getComputedStyle(tela2).display === "block"){
    console.log("enviado")
  }

});