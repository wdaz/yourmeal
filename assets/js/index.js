const navMenu = document.querySelector('.nav-menu');
const section = document.querySelector('section');
const basketMini = document.querySelector('.basket-mini');
const basketFull = document.querySelector('.basket-full');
const basketQuantity = document.querySelectorAll('.basket--quantity');
let basketItems = [1,2];
init();

function init() {
    let menuItem = '';
    menus.forEach((menu, index) => {
        if (index === 0) {
            addItem(menu.id, menu.name);
        }
        menuItem +=
            `<li class="nav-menu__item">
                <a onclick="addEventToLink('${menu.id}','${menu.name}',${index})" 
                class="${index === 0 ? 'nav-menu__link active' : 'nav-menu__link'}">
                    <img src="${menu.imgSrc}" alt="${menu.name}">
                    <span>${menu.name}</span>
                </a>
            </li>
        `
    });
    navMenu.innerHTML = menuItem;
    setLocalStorage('basketItems', basketItems);
    writeBasketItemsCount();
}

function addEventToLink(menuId, name, index) {
    const navMenuLink = document.querySelectorAll('.nav-menu__link');
    navMenuLink.forEach((l, i) => {
        i !== index ? l.classList.remove('active')
            : (l.classList.add('active'), l.scrollIntoView(), addItem(menuId, name));
    });

}

function addItem(itemId, name) {
    const selectedItems = items[itemId];

    section.innerHTML = `
          <h2>${name}</h2>
            <div class="box">
            ${selectedItems ? selectedItems.reduce((updated, latest) =>
        updated.concat(`
                    <article class="item">
                        <img src="${latest.imgSrc}" alt="${latest.name}" class="item__img">
                        <p class="item__price">${latest.price}${latest.currency}</p>
                        <p class="item__name">${latest.name}</p>
                        <p class="item__weight">${latest.weight}${latest.uom}</p>
                        <button type="button" class="button__add button">Добавить</button>
                    </article>
                `
        ), '') : 'Ничего не найдено'}
            </div>
            `
}

function showBasketItems() {
    basketMini.style.display = 'none';
    basketFull.style.display = 'flex';
}

function closeBasket() {
    basketFull.removeAttribute('style');
    basketMini.removeAttribute('style');
}

function writeBasketItemsCount() {
    const items = getLocalStorage('basketItems')
    items ? basketItems = items : basketItems = [];
    basketQuantity.forEach(q => q.innerHTML = basketItems.length);
}