const menus = [
    {
        id: 'burger',
        name: 'Бургеры',
        path: '/',
        imgSrc: 'assets/images/icons/burger.png',
    },
    {
        id: 'snack',
        name: 'Закуски',
        path: '/snack',
        imgSrc: 'assets/images/icons/snack.png',
    },
    {
        id: 'hotdog',
        name: 'Хот-доги',
        path: 'hotdog',
        imgSrc: 'assets/images/icons/hot-dog.png',
    },
    {
        id: 'combo',
        name: 'Комбо',
        path: 'combo',
        imgSrc: 'assets/images/icons/combo.png',
    },
    {
        id: 'shaurma',
        name: 'Шаурма',
        path: 'shaurma',
        imgSrc: 'assets/images/icons/shaurma.png',
    },
    {
        id: 'pizza',
        name: 'Пицца',
        path: 'pizza',
        imgSrc: 'assets/images/icons/pizza.png',
    },
    {
        id: 'wok',
        name: 'Вок',
        path: 'wok',
        imgSrc: 'assets/images/icons/wok.png',
    },
]

const items = {
    burger: [
        {
            imgSrc: 'assets/images/food/burgers/burger.png',
            name: 'Мясная бомба',
            price: 689,
            currency: '₽',
            weight: 520,
            uom: 'г',
        },
        {
            imgSrc: 'assets/images/food/burgers/burger.png',
            name: 'Мясная бомба',
            price: 700,
            currency: '₽',
            weight: 550,
            uom: 'г',
        },
        {
            imgSrc: 'assets/images/food/burgers/burger.png',
            name: 'Мясная бомба',
            price: 689,
            currency: '₽',
            weight: 520,
            uom: 'г',
        },
        {
            imgSrc: 'assets/images/food/burgers/burger.png',
            name: 'Мясная бомба',
            price: 689,
            currency: '₽',
            weight: 520,
            uom: 'г',
        },
    ],
    snack: [
        {
            imgSrc: 'assets/images/food/snacks/snack1.png',
            name: 'Начос',
            price: 250,
            currency: '₽',
            weight: 220,
            uom: 'г',
        },
        {
            imgSrc: 'assets/images/food/snacks/snack2.png',
            name: 'Картошка фри ',
            price: 245,
            currency: '₽',
            weight: 180,
            uom: 'г',
        },
        {
            imgSrc: 'assets/images/food/snacks/snack3.png',
            name: 'Луковые кольца',
            price: 230,
            currency: '₽',
            weight: 160,
            uom: 'г',
        },
    ]
}

let basketItems = [
    {
        imgSrc: 'assets/images/food/burgers/burger.png',
        name: 'Мясная бомба',
        price: 689,
        currency: '₽',
        weight: 520,
        uom: 'г',
        quantity: 10,
    },
    {
        imgSrc: 'assets/images/food/burgers/burger.png',
        name: 'Мясная бомба',
        price: 700,
        currency: '₽',
        weight: 550,
        uom: 'г',
        quantity: 10,
    },
];