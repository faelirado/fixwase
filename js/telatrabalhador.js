const menu = document.getElementById('opcoes');
let isDragging = false;
let startY = 0;
let currentHeight = 45; // Altura inicial
let animationFrameId = null;

// Função para iniciar o arrasto
const startDrag = (y) => {
    isDragging = true;
    startY = y;
    currentHeight = menu.offsetHeight;
};

// Função para mover o menu
const onDrag = (y) => {
    if (!isDragging) return;

    // Calcula a nova altura, baseada na posição Y do mouse/dedo
    const newHeight = Math.min(400, Math.max(125, window.innerHeight - y));

    // Atualiza a altura do menu de forma suave usando requestAnimationFrame
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    e.preventDefault();

    animationFrameId = requestAnimationFrame(() => {
        menu.style.height = `${newHeight}px`;
    });
};

// Função para finalizar o arrasto
const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;

    // Ajusta o menu para ficar totalmente aberto ou fechado com base na altura final
    if (menu.offsetHeight > 200) {
        menu.style.height = '300px'; // Mantém o menu aberto
    } else {
        menu.style.height = '45px'; // Fecha o menu
    }
};

// Eventos para desktop (mouse)
menu.addEventListener('mousedown', (e) => startDrag(e.pageY));
document.addEventListener('mousemove', (e) => onDrag(e.pageY));
document.addEventListener('mouseup', endDrag);

// Eventos para mobile (touch)
menu.addEventListener('touchstart', (e) => startDrag(e.touches[0].pageY));
document.addEventListener('touchmove', (e) => onDrag(e.touches[0].pageY));
document.addEventListener('touchend', endDrag);
