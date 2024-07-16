const hamburger = document.querySelector(".hamburger");
const cabecalhoMenu = document.querySelector(".cabecalho__menu");
const menuLinks = document.querySelectorAll(".menu__links a");

hamburger.addEventListener("click", () => {
    cabecalhoMenu.classList.toggle("active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        cabecalhoMenu.classList.remove("active");
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Exibe uma mensagem de carregamento
        alert('Enviando...');

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Formulário enviado com sucesso!');
                form.reset();  // Limpa o formulário
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert('Ocorreu um erro: ' + data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Ocorreu um erro ao enviar o formulário.');
                    }
                })
            }
        }).catch(error => {
            alert('Ocorreu um erro ao enviar o formulário.');
        });
    });
});
