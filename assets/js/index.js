const navMenuLink = document.querySelectorAll('.nav-menu__link');
navMenuLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        navMenuLink.forEach((l, i) => i !== index ? l.classList.remove('active') : null);
        link.classList.add('active');
        link.scrollIntoView();

    })
})
