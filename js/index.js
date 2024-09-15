//salva o nome

// Seleciona o input de email
const emailInput = document.getElementById('usuarioEmail');

document.addEventListener('DOMContentLoaded', () => {

    const cadastro = document.querySelector('.btncadastrar');

    // Salvar o texto no Local Storage quando o botão for clicado
    cadastro.addEventListener('click', () => {

        const emailValor = emailInput.value;
        localStorage.setItem('valor-email', emailValor);
    });
});

/*vai pra logado caso lembrar login true*/

window.onload = function() {

    // Carregar check de login
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