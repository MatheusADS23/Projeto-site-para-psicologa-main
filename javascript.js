// navegação suave
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth'
        });

        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

/* animação de entrada */
const elements = document.querySelectorAll('section, .card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

/* formulário */
const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const button = form.querySelector("button");

        button.innerText = "enviando...";
        button.disabled = true;

        setTimeout(() => {
            button.innerText = "enviado com sucesso";
            form.reset();

            setTimeout(() => {
                button.innerText = "enviar";
                button.disabled = false;
            }, 3000);

        }, 1500);
    });
}

/* hover cards */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "translateY(-8px) scale(1.03)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

/* efeito pulso */
function pulso(el) {
    el.style.transform = "scale(0.95)";

    setTimeout(() => {
        el.style.transform = "scale(1.05)";
    }, 100);

    setTimeout(() => {
        el.style.transform = "";
    }, 200);
}

/* aplicar pulso */
cards.forEach(card => {
    card.addEventListener('click', () => pulso(card));
});

links.forEach(link => {
    link.addEventListener('click', () => pulso(link));
});