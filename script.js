const landing = document.getElementById('landing');
const entrarBtn = document.getElementById('entrar-btn');
const escolhas = document.getElementById('escolhas');
const galeria = document.getElementById('galeria');
const fotosContainer = document.getElementById('fotos-container');
const galeriaTitulo = document.getElementById('galeria-titulo');

// Delay suave do texto e botão na Etapa 1
window.onload = () => {
    setTimeout(() => {
        landing.classList.add('show');
    }, 500);
}

// Clique no botão Entrar
entrarBtn.addEventListener('click', () => {
    landing.classList.remove('show');
    setTimeout(() => {
        landing.classList.add('hidden');
        escolhas.classList.remove('hidden');
    }, 500);
});

// Mostrar Galeria
function mostrarGaleria(tipo) {
    escolhas.classList.add('hidden');
    fotosContainer.innerHTML = ''; // Limpa fotos antigas
    galeria.classList.remove('hidden');

    if (tipo === 'zuadas') {
        galeriaTitulo.textContent = 'Fotos Zuadas';
        for (let i = 1; i <= 4; i++) {
            const img = document.createElement('img');
            img.src = `https://via.placeholder.com/300x300?text=Zuada+${i}`;
            img.alt = `Zuada ${i}`;
            img.addEventListener('click', () => alert(`Você clicou na Foto Zuada ${i}`));
            fotosContainer.appendChild(img);
        }
    } else if (tipo === 'gosto') {
        galeriaTitulo.textContent = 'Fotos que eu gosto';
        for (let i = 1; i <= 4; i++) {
            const img = document.createElement('img');
            img.src = `https://via.placeholder.com/300x300?text=Gosto+${i}`;
            img.alt = `Gosto ${i}`;
            img.addEventListener('click', () => alert(`Você clicou na Foto que gosta ${i}`));
            fotosContainer.appendChild(img);
        }
    }
}

// Voltar para tela de escolhas
function voltarEscolhas() {
    galeria.classList.add('hidden');
    escolhas.classList.remove('hidden');
}
