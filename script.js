// Manejo del formulario de contacto (para index.html)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;

        formStatus.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito.`;
        formStatus.className = 'text-center text-sm font-medium text-emerald-400 block pt-2';

        contactForm.reset();

        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    });
}

// Lógica para abrir imagen ampliada en pantalla completa (Lightbox)
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');
const workCards = document.querySelectorAll('.work-card');

if (modal && workCards.length > 0) {
    workCards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            modalImg.src = img.src;
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    });
}