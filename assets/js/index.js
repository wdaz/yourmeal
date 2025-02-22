const navMenu = document.querySelector('.nav-menu');
const section = document.querySelector('section');
const basketMini = document.querySelector('.basket-mini');
const basketFull = document.querySelector('.basket-full');
const basketQuantity = document.querySelectorAll('.basket--quantity');
const basketInfo = document.querySelectorAll('.basket__info');

start();

function start() {
    initMenu();
    // TODO: Remove this line when add basket functionality is implemented
    setLocalStorage('basketItems', basketItems);
    writeBasketItemsCount();
}


function initMenu() {
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
        `;
    });
    navMenu.innerHTML = menuItem;
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

function showFullBasket() {
    if (basketItems.length === 0) return;
    basketMini.style.display = 'none';
    basketFull.style.display = 'flex';
    showItemsInBasket();
}

function closeBasket() {
    basketFull.removeAttribute('style');
    basketMini.removeAttribute('style');
}

function writeBasketItemsCount() {
    const items = getLocalStorage('basketItems')
    items ? basketItems = items : basketItems = [];
    let basketItemsCount = basketItems.length > 0 ?
        basketItems?.reduce((a, b) => a + b.quantity, 0) :
        0;
    basketQuantity.forEach(q => q.innerHTML = basketItemsCount);
    if (!basketItems?.length) {
        basketInfo.forEach(i => i.insertAdjacentHTML('beforeend', '<p class="basket--empty">Тут пока пусто :(</p>'));
    }
}

function showItemsInBasket() {
    const basketItemsContainer = document.querySelector('.basket__items-container');
    const basketTotalPrice = document.querySelector('.basket__total--price');
    basketItemsContainer.innerHTML = '';
    basketItems?.forEach(item =>
        basketItemsContainer.innerHTML += `
                <li>
                    <div class="basket__item">
                        <img src="${item.imgSrc}" alt="${item.name}">
                        <div>
                            <p>${item.name}</p>
                            <p class="basket__item--weight">${item.weight}${item.uom}</p>
                            <p>${item.price}${item.currency}</p>
                        </div>
                    </div>
                    <div class="basket__item--quantity">
                        <button>-</button>
                        <p> ${item.quantity} </p>
                        <button>+</button>
                    </div>
                </li>  
        `);
    const totalPrice = basketItems?.reduce((a, b) => a + b.price * b.quantity, 0);
    basketTotalPrice.innerHTML = totalPrice + basketItems[0].currency;
    const basketFooter = document.querySelector('.basket__footer');
    if (totalPrice >= 599 && !basketFooter.querySelector('p')) {
        document.querySelector('.basket__footer').insertAdjacentHTML('afterbegin', `
            <p>
                <img src="assets/images/icons/icon-delivery.png" alt="Бесплатная доставка">
                    <span>Бесплатная доставка</span>
            </p>`);
    } else {
        basketFooter.querySelector('p')?.remove();
        basketFooter.style.justifyContent = 'flex-end';
    }
}