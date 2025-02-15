const menus = [
    {
        id: 'burger',
        name: 'Бургеры',
        path: '#',
        imgSrc: 'assets/images/menu/burger.png',
    },
    {
        id: 'snack',
        name: 'Закуски',
        path: '#',
        imgSrc: 'assets/images/menu/snack.png',
    },
    {
        id: 'hotdog',
        name: 'Хот-доги',
        path: '#',
        imgSrc: 'assets/images/menu/hot-dog.png',
    },
    {
        id: 'combo',
        name: 'Комбо',
        path: '#',
        imgSrc: 'assets/images/menu/combo.png',
    },
    {
        id: 'shaurma',
        name: 'Шаурма',
        path: '#',
        imgSrc: 'assets/images/menu/shaurma.png',
    },
    {
        id: 'pizza',
        name: 'Пицца',
        path: '#',
        imgSrc: 'assets/images/menu/pizza.png',
    },
    {
        id: 'wok',
        name: 'Вок',
        path: '#',
        imgSrc: 'assets/images/menu/wok.png',
    },
]
const navMenu = document.querySelector('.nav-menu');
init();

function init() {
    let menuItem = '';
    menus.forEach((menu, index) => {
        menuItem +=
            `<li class="nav-menu__item">
                <a onclick="addEventToLink(${index})"  class="${index === 0 ? 'nav-menu__link active' : 'nav-menu__link'}" href="${menu.path}">
                    <img src="${menu.imgSrc}" alt="${menu.name}">
                    <span>${menu.name}</span>
                </a>
            </li>
        `
    });
    navMenu.innerHTML = menuItem;
}

function addEventToLink(index) {
    const navMenuLink = document.querySelectorAll('.nav-menu__link');
    navMenuLink.forEach((l, i) => {
        i !== index ? l.classList.remove('active') : (l.classList.add('active'), l.scrollIntoView());
    });

}