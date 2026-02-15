// Seções
const landing = document.getElementById('landing');
const titans = document.getElementById('titans');
const escolhas = document.getElementById('escolhas');
const galeria = document.getElementById('galeria');
const fotosContainer = document.getElementById('fotos-container');
const gostoTexto = document.getElementById('gosto-texto');
const confirmacao = document.getElementById('confirmacao');
const final = document.getElementById('final');
const coracoesContainer = document.getElementById('coracoes-container');

// Botão Entrar
document.getElementById('entrar-btn').addEventListener('click', () => {
    landing.classList.add('hidden');
    titans.classList.remove('hidden');
    criarCoracoes('roxo'); // corações ao entrar
});

// Jovens Titãs - clicar nos casais
document.getElementById('ravena-mutano').addEventListener('click', () => criarCoracoes('roxo'));
document.getElementById('estelar-robin').addEventListener('click', () => criarCoracoes('rosa'));

// Função para criar corações
function criarCoracoes(cor) {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart', cor);
        heart.style.left = Math.random() * 90 + '%';
        heart.style.animationDuration = 1 + Math.random() * 2 + 's';
        coracoesContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

// Função mostrar galeria
function mostrarGaleria(tipo) {
    titans.classList.add('hidden');
    escolhas.classList.add('hidden');
    galeria.classList.remove('hidden');
    fotosContainer.innerHTML = '';
    gostoTexto.classList.add('hidden');

    if (tipo === 'zuadas') {
        document.getElementById('galeria-titulo').innerText = 'Fotos Zuadas';
        const fotosZuadas = [
            {src:'zuada1.jpg', frase:'Você tava preparando pra me bater, olha a cara, eu amo'},
            {src:'zuada2.jpg', frase:'Ficou brava e ja tava bebada e foi deitar no chão pq sentiu calor, mas tava frio'},
            {src:'zuada3.jpg', frase:'Essa é boa kkkkkk'}
        ];
        fotosZuadas.forEach(foto => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = foto.src;
            img.alt = foto.frase;
            div.appendChild(img);
            const p = document.createElement('p');
            p.innerText = foto.frase;
            div.appendChild(p);
            fotosContainer.appendChild(div);
        });
    } else if (tipo === 'gosto') {
        document.getElementById('galeria-titulo').innerText = 'Fotos que eu gosto';
        const fotosGosto = ['gosto1.jpg','gosto2.jpg','gosto3.jpg'];
        fotosGosto.forEach(src => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = src;
            div.appendChild(img);
            fotosContainer.appendChild(div);
        });
        // Mostrar texto + versículo após as 3 fotos
        gostoTexto.classList.remove('hidden');
    }
}

// Função de confirmar final
function confirmarFinal() {
    galeria.classList.add('hidden');
    confirmacao.classList.remove('hidden');
}

// Voltar para galeria
function voltarGaleria() {
    confirmacao.classList.add('hidden');
    galeria.classList.remove('hidden');
}

// Mostrar tela final
function mostrarFinal() {
    confirmacao.classList.add('hidden');
    final.classList.remove('hidden');
}
