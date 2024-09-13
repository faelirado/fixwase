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
            ajuda2.style.display = "block"
            ajuda1.style.transform = "translateX(-100dvw)"
            setTimeout(function() {
                ajuda1.style.display = "none"
              }, 1400);
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
    
    // Calcula a posição do valor com base na posição do slider
    const percentage = ((rangeOrcamento.value - rangeOrcamento.min) / (rangeOrcamento.max - rangeOrcamento.min)) * 100;
    const thumbWidth = 13; // Largura do thumb
    const containerWidth = rangeOrcamento.offsetWidth;
    const valuePosition = (percentage / 100) * (containerWidth - thumbWidth);
    
    valorOrcamento.style.left = `${valuePosition}px`;
}

// Adiciona um ouvinte de eventos para o input do range
rangeOrcamento.addEventListener('input', updateValue);

// Inicializa o valor exibido
updateValue();

function showValue() {
    valorOrcamento.style.display = 'block';
    updateValue();
}

function hideValue() {
    valorOrcamento.style.display = 'none';
        }
        
    rangeOrcamento.addEventListener('input', showValue);
    rangeOrcamento.addEventListener('mousedown', showValue);
    rangeOrcamento.addEventListener('mousemove', updateValue);
        
        
    // Para dispositivos móveis
    rangeOrcamento.addEventListener('touchstart', showValue);
    rangeOrcamento.addEventListener('touchmove', updateValue);