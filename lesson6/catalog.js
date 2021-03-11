'use strict';

const catalog = {
    goodsCollection: [
        {
            type: 'item',
            id: 1,
            name: 'Клавиатура',
            brand: 'O-Klick',
            price: 980,
        },
        {
            type: 'item',
            id: 2,
            name: 'Клавиатура',
            brand: 'Genius',
            price: 760,
        },
        {
            type: 'item',
            id: 3,
            name: 'Ноутбук',
            brand: 'Hewlett-Packard',
            price: 17300,
        },
        {
            type: 'item',
            id: 4,
            name: 'Мышь',
            brand: 'Genius',
            price: 670,
        }
    ],

    init() {
        this.renderCatalog();
        this.addToCart();
    },

    renderCatalog() {
        const main = document.querySelector('.main');
        const section = document.createElement('section');
        section.classList.add('catalog');
        section.classList.add('center');
        main.appendChild(section);
        this.renderItemCatalog();
    },

    renderItemCatalog() {
        for (let index = 0; index < this.goodsCollection.length; index++) {
            this.createItemCart(this.goodsCollection[index]);
        }
        this.getMeItemProperties();
    },


    createItemCart() {
        const item = document.createElement('div');
        item.classList.add('catalog__item');
        document.querySelector('.catalog').appendChild(item);
    },

    getMeItemProperties() {
        const items = Array.from(document.querySelectorAll('.catalog__item'));
        for (let iCatalog__items = 0; iCatalog__items < items.length; iCatalog__items++) {
            const itemImage = document.createElement('img');
            itemImage.classList.add('item__image');
            itemImage.setAttribute('alt', 'Картинка товара');
            const itemHeading = document.createElement('h4');
            itemHeading.insertAdjacentText('beforeend', this.goodsCollection[iCatalog__items].name + " " +
                this.goodsCollection[iCatalog__items].brand);
            itemHeading.classList.add('item__heading');
            const itemPrice = document.createElement('p');
            itemPrice.insertAdjacentText('beforeend', "Цена товара: " + this.goodsCollection[iCatalog__items].price + "рублей. ");
            itemPrice.classList.add('item__price');
            const button = document.createElement('div');
            button.classList.add('button');
            button.insertAdjacentText('beforeend', "Добавить в корзину");
            items[iCatalog__items].appendChild(itemImage);
            items[iCatalog__items].appendChild(itemHeading);
            items[iCatalog__items].appendChild(itemPrice);
            items[iCatalog__items].appendChild(button);
        }
    },

    addToCart() {
        document.querySelector('.catalog').addEventListener('click', event => {
            this.containerClickHandler(event);
        });
    },

    containerClickHandler(event) {
        if (event.target.className !== 'button') {
            return;
        } else {
            const currentItem = event.target.parentNode;
            const elem = Array.from(document.querySelectorAll('.catalog__item'));
            let index = elem.indexOf(currentItem);
            cart.goods.push(this.goodsCollection[index]);
            if (document.querySelector('.empty-cart') !== null) {
                cart.cartClear();
            }
            if (document.querySelector('.button_clear') === null) {
                cart.getClearAllButton();
            }
            cart.getCartItem();
            cart.clearAllCart();
        }
    },
};

const cart = {

    goods: [],

    init() {
        this.clearAllCart();
    },

    getCartItem() {
        this.createItemCart();
    },

    cartClear() {
        document.querySelector('.empty-cart').remove();
    },

    render() {
        const main = document.querySelector('.main');
        const cartRender = document.createElement('section');
        cartRender.classList.add('cart-container');
        main.appendChild(cartRender);
        this.getEmptyCart();
    },

    getEmptyCart() {
        const emptyCart = document.createElement('div');
        emptyCart.classList.add('empty-cart');
        document.querySelector('.cart-container').appendChild(emptyCart);
        document.querySelector('.empty-cart').insertAdjacentText('beforeend', "Корзина пуста");
    },


    createItemCart() {
        const itemCart = document.createElement('div');
        itemCart.classList.add('cart__item');
        document.querySelector('.cart-container').appendChild(itemCart);
        const cartItemsArr = Array.from(document.querySelectorAll('.cart__item'));
        const index = cartItemsArr.length - 1;
        const itemImage = document.createElement('img');
        itemImage.classList.add('cart-item__image');
        cartItemsArr[index].appendChild(itemImage);
        itemImage.setAttribute('alt', 'Картинка товара');
        const itemHeading = document.createElement('h4');
        itemHeading.insertAdjacentText('beforeend', this.goods[index].name + " " +
            this.goods[index].brand);
        cartItemsArr[index].appendChild(itemHeading);
        itemHeading.classList.add('item__heading');
        const itemPrice = document.createElement('p');
        itemPrice.insertAdjacentText('beforeend', "Цена товара: " + this.goods[index].price + "рублей. ");
        itemPrice.classList.add('item__price');
        cartItemsArr[index].appendChild(itemPrice)
        const button = document.createElement('div');
        button.classList.add('button');
        button.insertAdjacentText('beforeend', "Удалить из корзины");
        cartItemsArr[index].appendChild(button);
    },

    getClearAllButton() {
        const clearButton = document.createElement('div');
        clearButton.classList.add('button_clear');
        document.querySelector('.cart-container').appendChild(clearButton);
        clearButton.insertAdjacentText('beforeend', 'Удалить все товары');
    },

    clearAllCart() {
        document.querySelector('.cart-container').addEventListener('click', event => {
            this.clearCart(event);
        });
    },

    clearCart(event) {
        if (event.target.className === 'button_clear') {
            this.goods = [];
            document.querySelector('.cart-container').remove();
            this.render();
        } else {
            return;
        }
    },

};

catalog.init();
cart.render();
