(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const links = document.querySelectorAll('.nav__link a'); // Selecciona los enlaces dentro del menú

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // Agregar evento a cada enlace dentro del menú
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show'); // Cierra el menú al hacer clic en cualquier enlace
        });
    });
})();