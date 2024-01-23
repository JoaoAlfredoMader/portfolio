const projeto1 = document.getElementById('projeto1');
const projeto2 = document.getElementById('projeto2');
const projeto3 = document.getElementById('projeto3');

projeto1.addEventListener('click', () => {
    alert('Projeto Meus Contatos');
});

projeto2.addEventListener('click', () => {
    alert('Projeto Gerenciador De Conta Bancaria');
});

projeto3.addEventListener('click', () => {
    alert('Projeto Emprestimo De Ferramentas');
});


const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = 'red'; 
});

header.addEventListener('mouseout', () => {
    header.style.backgroundColor = ''; 
});


const imagens = document.querySelectorAll('.img');

imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        imagem.style.transform = 'scale(1.7)';
    });

    imagem.addEventListener('mouseout', () => {
        imagem.style.transform = 'scale(1)';
    });
});

const copiaremail = document.getElementById('copyEmail');

copiaremail.addEventListener('click', () => {
    const email = 'joaoalfredo229@gmail.com';
    navigator.clipboard.writeText(email)
        .then(() => {
            alert('Email copiado: ' + email);
        })
        .catch(err => {
            console.error('Erro ao copiar email: ', err);
        });
});