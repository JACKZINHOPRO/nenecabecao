const landing = document.getElementById('landing');
const entrarBtn = document.getElementById('entrar-btn');
const escolhas = document.getElementById('escolhas');
const landingHeader = landing.querySelector('h1');

// Delay suave do texto e botão na Etapa 1
window.onload = () => {
    setTimeout(() => {
        landing.classList.add('show'); // adiciona opacidade aos elementos
    }, 500); // 0.5s de delay antes de aparecer
}

// Clique no botão Entrar
entrarBtn.addEventListener('click', () => {
    landing.classList.remove('show'); // some a primeira tela
    setTimeout(() => {
        landing.classList.add('hidden'); // esconde de vez
        escolhas.classList.remove('hidden'); // mostra a tela das escolhas
    }, 500); // delay para transição suave
});

// Função para clicar nas escolhas
function selecionar(tipo) {
    alert("Você escolheu: " + tipo);
    // futuramente aqui vamos mostrar a galeria da Etapa 3
}
