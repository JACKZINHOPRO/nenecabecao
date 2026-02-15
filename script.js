const landing = document.getElementById('landing');
const entrarBtn = document.getElementById('entrar-btn');
const escolhas = document.getElementById('escolhas');
const galeria = document.getElementById('galeria');
const fotosContainer = document.getElementById('fotos-container');
const galeriaTitulo = document.getElementById('galeria-titulo');
const confirmacao = document.getElementById('confirmacao');
const final = document.getElementById('final');
const coracoesContainer = document.getElementById('coracoes-container');

// Delay inicial
window.onload = () => {
    setTimeout(() => landing.classList.add('show'), 500);
}

// Corações
function criarCoracoes() {
    for(let i=0;i<20;i++){
        const c = document.createElement('div');
        c.classList.add('coracao');
        c.style.left = Math.random()*100+'vw';
        c.style.fontSize = 12 + Math.random()*24 + 'px';
        c.style.animationDuration = 3 + Math.random()*3 + 's';
        c.textContent='❤️';
        coracoesContainer.appendChild(c);
        setTimeout(()=>c.remove(),6000);
    }
}

// Entrar
entrarBtn.addEventListener('click',()=>{
    landing.classList.remove('show');
    criarCoracoes();
    setTimeout(()=>{
        landing.classList.add('hidden');
        escolhas.classList.remove('hidden');
    },500);
});

// Mostrar galeria
function mostrarGaleria(tipo){
    escolhas.classList.add('hidden');
    fotosContainer.innerHTML='';
    galeria.classList.remove('hidden');

    if(tipo==='zuadas'){
        galeriaTitulo.textContent='Fotos zuadas';
        const frases = [
            "Você não tem fotos zuadas. Só perfeitas.",
            "Ainda mais perfeitas do que você imagina.",
            "Brincadeira, olha que risada!"
        ];
        for(let i=1;i<=3;i++){
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src=`zuada${i}.jpg`;
            img.alt=`Zuada ${i}`;
            const p = document.createElement('p');
            p.classList.add('foto-frase');
            p.textContent = frases[i-1];
            img.addEventListener('click',()=>p.style.opacity=1);
            div.appendChild(img);
            div.appendChild(p);
            fotosContainer.appendChild(div);
        }
    } else if(tipo==='gosto'){
        galeriaTitulo.textContent='Fotos que eu gosto';
        const textos = [
            "Você ilumina minha vida e faz tudo valer a pena.",
            "Cada momento com você é único, e eu agradeço todos os dias por você existir.",
            "Nos seus olhos eu vejo a felicidade que sempre busquei."
        ];
        for(let i=1;i<=3;i++){
            const div=document.createElement('div');
            const img=document.createElement('img');
            img.src=`gosto${i}.jpg`;
            img.alt=`Gosto ${i}`;
            const p=document.createElement('p');
            p.classList.add('foto-frase');
            p.textContent=textos[i-1];
            img.addEventListener('click',()=>p.style.opacity=1);
            div.appendChild(img);
            div.appendChild(p);
            fotosContainer.appendChild(div);
        }
        // Adiciona versículo na última foto
        const divVersiculo=document.createElement('div');
        const pVersiculo=document.createElement('p');
        pVersiculo.classList.add('foto-frase');
        pVersiculo.textContent="Gênesis 2:18 – 'Não é bom que o homem esteja só; farei para ele alguém que o auxilie e lhe corresponda.'";
        divVersiculo.appendChild(pVersiculo);
        fotosContainer.appendChild(divVersiculo);
    }
}

// Confirmar final
function confirmarFinal(){
    galeria.classList.add('hidden');
    confirmacao.classList.remove('hidden');
}

function mostrarFinal(){
    confirmacao.classList.add('hidden');
    final.classList.remove('hidden');
}

function voltarGaleria(){
    confirmacao.classList.add('hidden');
    galeria.classList.remove('hidden');
}
