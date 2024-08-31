/*voltar pro inicio*/
var voltar = document.getElementById('backi');

voltar.addEventListener('click', function () {
    location.href = "logado.html"
});

/*confere se a senha é a mesma*/
document.getElementById("cadastro").addEventListener("submit", function(event) {
    // Seleciona todos os checkboxes no formulário
    const senha = document.getElementById('senha').value;
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