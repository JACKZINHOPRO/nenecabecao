const landing = document.getElementById('landing');
const escolhas = document.getElementById('escolhas');

// Etapa 1: animação de entrada
window.onload = () => {
    landing.classList.add('show');
}

// Botão Entrar
function entrar() {
    landing.classList.add('fade-out');
    setTimeout(() => {
        landing.classList.add('hidden');
        escolhas.classList.remove('hidden');
        escolhas.classList.add('show');
    }, 500);
}

// Função para clicar nas escolhas
function selecionar(tipo) {
    alert("Você escolheu: " + tipo + " (na próxima etapa você verá as fotos)");
    // futuramente aqui vamos mostrar a galeria da Etapa 3
}
