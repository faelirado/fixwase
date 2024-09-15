//salva o nome

document.addEventListener('DOMContentLoaded', () => {

    const cadastro = document.querySelector('.btncadastrar');

    // Salvar o texto no Local Storage quando o botão for clicado
    cadastro.addEventListener('click', () => {

        const emailValor = emailInput.value;
        localStorage.setItem('valor-email', emailValor);
    });
});