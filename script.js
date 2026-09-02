// Efeito de rolagem no Header (muda a opacidade/sombra ao rolar)
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(11, 15, 25, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(11, 15, 25, 0.85)';
        header.style.boxShadow = 'none';
    }
});

// Simulação de interatividade ou analytics simples de clique para conversão
const botoesComprar = document.querySelectorAll('.btn-comprar, .btn-primary, .btn-secondary');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Aqui você pode disparar eventos do Pixel do Facebook ou Google Analytics antes de redirecionar
        console.log('Usuário clicou para ir ao site principal:', e.target.href);
    });
});