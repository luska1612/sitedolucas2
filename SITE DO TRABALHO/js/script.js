// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura dos valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Validação simples
    if(nome && email && mensagem) {
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});