const landing = document.getElementById('landing');

// Animação de entrada
window.onload = () => {
    landing.classList.add('show');
}

// Função do botão "Entrar" com fade out
function entrar() {
    landing.classList.add('fade-out');
    setTimeout(() => {
        alert("Aqui você pode avançar para a tela das escolhas!");
    }, 500);
}
