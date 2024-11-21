// Substitua pelo seu e-mail
const email = "arthursantorogomes92@gmail.com ";

// Seleciona os elementos
const copyEmailBtn = document.querySelector('.copy-email-btn');
const notification = document.getElementById('notification');

// Adiciona evento de clique no botão
copyEmailBtn.addEventListener('click', () => {
    // Copia o e-mail para a área de transferência
    navigator.clipboard.writeText(email).then(() => {
        // Exibe a notificação
        notification.style.display = 'block';

        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }).catch(err => {
        console.error('Erro ao copiar o e-mail: ', err);
    });
});
