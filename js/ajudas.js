/*botao voltar*/
var voltar = document.getElementById('backi');

if (voltar) {
  voltar.addEventListener('click', function () {
    location.href = "logado.html";
  });
}

/*pesquisar*/
function pesquisar() {
// Pega o valor da barra de pesquisa
let input = document.getElementById('barraProcurar').value.toLowerCase();

// Seleciona todos os elementos com id "nomeProduto"
let servicos = document.querySelectorAll('#escolherajuda');

// Loop por todos os servicos
servicos.forEach(function(servico) {
    // Pega o texto do nome do produto
    let nomeServico = servico.querySelector('label').textContent.toLowerCase();

    // Verifica se o nome do produto contém o texto digitado
    if (nomeServico.includes(input)) {
        servico.style.display = 'flex'; // Exibe o produto
    } else {
        servico.style.display = 'none'; // Esconde o produto
    }
});
}

function marcarAjuda(div) {
    const check = div.querySelector("input")
    if(check){
        check.checked = !check.checked
    }
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
            
            var totalmin = 0
            var totalmax = 100
            let valorMin = document.getElementById('valormin');
            let valorMax = document.getElementById('valormax');

            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    totalmin += parseFloat(checkbox.value);
                    totalmax += parseFloat(checkbox.value);
                }
            });

            valorMin.textContent = totalmin
            valorMax.textContent = totalmax
            
            
            ajuda2.style.display = "block"
            ajuda1.style.transform = "translateX(-150dvw)"
            ajuda2.style.transform = "translateX(100%)"
            
            setTimeout(function() {
                ajuda1.style.display = "none"
                ajuda2.style.transform = "translateX(0)"
            }, 1400);

            setTimeout(function() {
                valorOrcamento.style.display = "block"
                document.getElementById("max").style.display = "block"
                document.getElementById("min").style.display = "block"
            }, 1401);

            rangeOrcamento.min = valorMin.innerText
            rangeOrcamento.max = valorMax.innerText
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