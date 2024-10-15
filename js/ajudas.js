/*botao voltar*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "logado.html";
  });
}


/*confere se há algum checkbox marcado*/
document.getElementById("ajudas").addEventListener("submit", function(event) {
    // Seleciona todos os checkboxes no formulário
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const ajuda1 = document.querySelector('.ajuda1');
    const ajuda2 = document.querySelector('.ajuda2');
    let isChecked = false;
    event.preventDefault();
    
    // Verifica se pelo menos um checkbox está selecionado
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            isChecked = true;
            
            var total = 0
            let valorMin = document.getElementById('valormin');

            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    total += parseFloat(checkbox.value);
                }
            });

            valorMin.textContent = total
            
            
            ajuda2.style.display = "block"
            ajuda1.style.transform = "translateX(-150dvw)"
            ajuda2.style.transform = "translateX(100%)"
            setTimeout(function() {
                ajuda1.style.display = "none"
                ajuda2.style.transform = "translateX(-50%)"
            }, 1400);
            
            setTimeout(function() {
                valorOrcamento.style.display = 'block';
            }, 1401);

            rangeOrcamento.min = valorMin.innerText
            valorOrcamento.textContent = `R$${rangeOrcamento.value}`;

            break;
        }
    }
    
    // Se nenhum checkbox estiver selecionado, impede o envio do formulário
    if (!isChecked) {
        alert("Por favor, selecione pelo menos uma opção.");
    }
});

const valorOrcamento = document.getElementById('valororcamento');
const valorMin = document.getElementById('valormin');
const rangeOrcamento = document.getElementById('rangeorcamento');

rangeOrcamento.min = valorMin.innerText
rangeOrcamento.value = valorMin.innerText

// Atualiza o valor exibido
function updateValue() {
    valorOrcamento.textContent = `R$${rangeOrcamento.value}`;
}

// Adiciona um ouvinte de eventos para o input do range
rangeOrcamento.addEventListener('input', updateValue);

// Inicializa o valor exibido
updateValue();

function showValue() {
    updateValue();
}
        
rangeOrcamento.addEventListener('input', showValue);
rangeOrcamento.addEventListener('mousedown', showValue);
rangeOrcamento.addEventListener('mousemove', updateValue);
        
        
// Para dispositivos móveis
rangeOrcamento.addEventListener('touchstart', showValue);
rangeOrcamento.addEventListener('touchmove', updateValue);