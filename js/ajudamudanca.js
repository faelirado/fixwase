/*botao voltar*/
var voltar = document.getElementById('backi');

voltar.addEventListener('click', function () {
    location.href = "logado.html"
});

/*confere se há algum checkbox marcado*/
document.getElementById("ajudas").addEventListener("submit", function(event) {
    // Seleciona todos os checkboxes no formulário
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    // Verifica se pelo menos um checkbox está selecionado
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            isChecked = true;
            break;
        }
    }

    // Se nenhum checkbox estiver selecionado, impede o envio do formulário
    if (!isChecked) {
        alert("Por favor, selecione pelo menos uma opção.");
        event.preventDefault(); // Impede o envio do formulário
    }
});