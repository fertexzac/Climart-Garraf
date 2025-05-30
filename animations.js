document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                // No necesitamos seguir observando este elemento
                observer.unobserve(entry.target);
            }
        });
    }, {
        // El elemento se considerará visible cuando al menos el 20% esté en el viewport
        threshold: 0.2,
        // Comenzar a animar un poco antes de que el elemento entre en el viewport
        rootMargin: '50px'
    });

    // Inicialmente ocultamos todos los elementos animados
    animatedElements.forEach(el => {
        el.style.visibility = 'hidden';
        // Comenzamos a observar cada elemento
        observer.observe(el);
    });
}); 