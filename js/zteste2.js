document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('#avaliacoes-wrapper');
  const avaliacoes = document.querySelectorAll('.avaliacao');
  const btnEsquerda = document.querySelector('.seta-esquerda');
  const btnDireita = document.querySelector('.seta-direita');
  
  let currentIndex = 0;

  // Função para atualizar a visualização da avaliação
  function updateAvaliacao() {
    const offset = -currentIndex * 100; // Move as avaliações em 100% do container
    wrapper.style.transform = `translateX(${offset}%)`;
  }

  // Evento para a seta da direita
  btnDireita.addEventListener('click', () => {
    if (currentIndex < avaliacoes.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volta para a primeira avaliação
    }
    updateAvaliacao();
  });

  // Evento para a seta da esquerda
  btnEsquerda.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = avaliacoes.length - 1; // Vai para a última avaliação
    }
    updateAvaliacao();
  });
});
