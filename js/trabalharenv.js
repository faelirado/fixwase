/*voltar pro inicio*/
var voltar = document.getElementById('header');

if (voltar) {
    voltar.addEventListener('click', function () {
      location.href = "logado.html";
    });
}

// teste cargo
var check = document.querySelector("i")

if (check) {
    check.addEventListener('click', function () {
      if(localStorage.getItem("cargo") === "trabalhador"){
        localStorage.setItem("cargo","")
    }
    else{
          localStorage.setItem("cargo","trabalhador")
      }
    });
}