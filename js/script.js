// script.js
let index = 0;  // Índice do slide atual
const slides = document.querySelectorAll('.slide');  // Seleciona todos os slides
const totalSlides = slides.length;  // Conta o total de slides

// Função para mover o slide
function moveSlide(step) {
    index += step;  // Atualiza o índice com o valor de "step" (1 para avançar, -1 para voltar)

    if (index >= totalSlides) {
        index = 0;  // Volta para o primeiro slide
    } else if (index < 0) {
        index = totalSlides - 1;  // Vai para o último slide
    }

    // Move a posição da .slider para mostrar o slide correto
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
}

// Função para avançar automaticamente
function autoMove() {
    moveSlide(1);  // Avança um slide
}

// Configurar o intervalo automático para mudar de slide a cada 3 segundos
setInterval(autoMove, 3000);

// Garantir que o primeiro slide seja exibido ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0);  // Exibe o primeiro slide
});
