const cartItems = [];

function FillFeturedItems() {
    let data = JSON.parse(featuredItems);
    console.log(data);
    data.forEach(element => {

        let articleProductFromJSON = document.createElement('article');
        articleProductFromJSON.classList.add('product');
        articleProductFromJSON.dataset.id = element.id;
        document.querySelector('.products_list').appendChild(articleProductFromJSON);

        let imgProductFromJSON = document.createElement('img');
        imgProductFromJSON.classList.add('product_img');
        imgProductFromJSON.src = element.img;
        imgProductFromJSON.alt = element.img_alt;
        articleProductFromJSON.appendChild(imgProductFromJSON);

        let h3ProductFromJSON = document.createElement('h3');
        h3ProductFromJSON.textContent = element.title;
        articleProductFromJSON.appendChild(h3ProductFromJSON);


        let p1ProductFromJSON = document.createElement('p');
        p1ProductFromJSON.classList.add('product_description');
        p1ProductFromJSON.textContent = element.description;
        articleProductFromJSON.appendChild(p1ProductFromJSON);

        let p2ProductFromJSON = document.createElement('p');
        p2ProductFromJSON.classList.add('product_price');
        p2ProductFromJSON.textContent = element.price;
        articleProductFromJSON.appendChild(p2ProductFromJSON);

        let buttonProductFromJSON = document.createElement('button');
        buttonProductFromJSON.classList.add('product_add_button');
        articleProductFromJSON.appendChild(buttonProductFromJSON);

        //---------------------------------------------------------------------------------------------//
        //НАЧАЛО ДЗ 12


        // ФУНКЦИЯ ПО СОЗДАНИЮ НОВОЙ КАРТОЧКИ В КОРЗИНЕ
        let ProductDoseNotInCart = () => {

            let articleCartProductFromJSON = document.createElement('article');
            articleCartProductFromJSON.classList.add('cart_item');
            articleCartProductFromJSON.dataset.id = element.id;
            document.querySelector('.cart').appendChild(articleCartProductFromJSON);

            let imgCartProductFromJSON = document.createElement('img');
            imgCartProductFromJSON.classList.add('cart_img');
            imgCartProductFromJSON.src = element.img;
            imgCartProductFromJSON.alt = element.img_alt;
            articleCartProductFromJSON.appendChild(imgCartProductFromJSON);

            let divCartProductFromJSON = document.createElement('div');
            divCartProductFromJSON.classList.add('cart_product_data');
            articleCartProductFromJSON.appendChild(divCartProductFromJSON);

            let h3CartProductFromJSON = document.createElement('h3');
            h3CartProductFromJSON.textContent = element.title;
            divCartProductFromJSON.appendChild(h3CartProductFromJSON);

            let p1CartProductFromJSON = document.createElement('p');
            p1CartProductFromJSON.textContent = "Price:   ";
            divCartProductFromJSON.appendChild(p1CartProductFromJSON);

            let span1CartProductFromJSON = document.createElement('span');
            span1CartProductFromJSON.classList.add('product_price');
            span1CartProductFromJSON.style.fontSize = "22px";
            span1CartProductFromJSON.style.lineHeight = "26px";
            span1CartProductFromJSON.textContent = element.price;
            p1CartProductFromJSON.appendChild(span1CartProductFromJSON);


            let p2CartProductFromJSON = document.createElement('p');
            p2CartProductFromJSON.textContent = "Color:   " + element.color;
            divCartProductFromJSON.appendChild(p2CartProductFromJSON);

            let p3CartProductFromJSON = document.createElement('p');
            p3CartProductFromJSON.textContent = "Size:   " + element.size;
            divCartProductFromJSON.appendChild(p3CartProductFromJSON);

            let divInDivCartProductFromJSON = document.createElement('div');
            divInDivCartProductFromJSON.classList.add('quantity');
            divCartProductFromJSON.appendChild(divInDivCartProductFromJSON);

            let p1DivInDivCartProductFromJSON = document.createElement('p');
            p1DivInDivCartProductFromJSON.textContent = 'Quantity:   ';
            divInDivCartProductFromJSON.appendChild(p1DivInDivCartProductFromJSON);

            let img1InDivCartProductFromJSON = document.createElement('img');
            img1InDivCartProductFromJSON.classList.add('sub_img');
            img1InDivCartProductFromJSON.src = "./img/minus.svg";
            img1InDivCartProductFromJSON.alt = "Subtract an item";
            img1InDivCartProductFromJSON.style.visibility = "hidden";
            divInDivCartProductFromJSON.appendChild(img1InDivCartProductFromJSON);

             //УДАЛЕНИЕ 1 ТОВАРА ИЗ КОРЗИНЫ
            img1InDivCartProductFromJSON.addEventListener('click', () => {
                cartItems.forEach(value => {
                    if (value.id == element.id) {
                        if (value.count > 1) {
                            value.count--;
                            p2DivInDivCartProductFromJSON.textContent = value.count;
                        }
                    }
                    if (value.count < Number(element.quantity)) {
                        img2InDivCartProductFromJSON.style.visibility = "visible";
                    }
                    if (value.count == 1) {
                        img1InDivCartProductFromJSON.style.visibility = "hidden";
                    }
                });
            });

            let p2DivInDivCartProductFromJSON = document.createElement('p');
            p2DivInDivCartProductFromJSON.classList.add("num_quantity")
            p2DivInDivCartProductFromJSON.textContent = "1";
            divInDivCartProductFromJSON.appendChild(p2DivInDivCartProductFromJSON);

            let img2InDivCartProductFromJSON = document.createElement('img');
            img2InDivCartProductFromJSON.classList.add('add_img');
            img2InDivCartProductFromJSON.src = "./img/plus.svg";
            img2InDivCartProductFromJSON.alt = "Subtract an item";
            divInDivCartProductFromJSON.appendChild(img2InDivCartProductFromJSON);

            //ДОБАВЛЕНИЕ 1 ТОВАРА ИЗ КОРЗИНЫ
            img2InDivCartProductFromJSON.addEventListener('click', () => {
                cartItems.forEach(value => {
                    if (value.id == element.id) {
                        if (value.count < Number(element.quantity)) {
                            value.count++;
                            p2DivInDivCartProductFromJSON.textContent = value.count;
                        }
                    }

                    if (value.count == Number(element.quantity)) {
                        img2InDivCartProductFromJSON.style.visibility = "hidden";
                    }
                    if (value.count > 1) {
                        img1InDivCartProductFromJSON.style.visibility = "visible";
                    }
                });
            });


            let dellImgInDivCartProductFromJSON = document.createElement('img');
            dellImgInDivCartProductFromJSON.classList.add('dell_img');
            dellImgInDivCartProductFromJSON.src = "./img/dellite.svg";
            dellImgInDivCartProductFromJSON.alt = "Delete an item";
            articleCartProductFromJSON.appendChild(dellImgInDivCartProductFromJSON);


            //УДАЛЕНИЕ ВСЕГО ТОВАРА
            dellImgInDivCartProductFromJSON.addEventListener('click', () => {
                cartItems.forEach((value, index) => {
                    if (value.id == element.id) {
                        cartItems.splice(index, 1);
                    }
                });
                articleCartProductFromJSON.remove();
                if (cartItems.length == 0) {
                    document.querySelector('.cart').dataset.visible = "false";
                }
            });
        }

        //ФУНКЦИЯ ПО ДОБАВЛЕНИЮ ПОКУПКИ ЕСЛИ КАРТОЧКА УЖЕ ЕСТЬ
        let ProductIsInCart = (buff) => {
            let cartGoods = document.querySelectorAll(".cart_item");
            cartGoods.forEach(e => {
                if (e.dataset.id === buff.id) {
                    e.querySelector('.num_quantity').textContent = buff.count;
                    e.querySelector('.sub_img').style.visibility = "visible";
                    if (buff.count == Number(element.quantity)) {
                        e.querySelector('.add_img').style.visibility = "hidden";
                    }
                }
            });
        }

        /// СОБЫТИЕ ДОБАВЛЕНИЯ ТОВАРА В КОРЗИНУ И ФОРМИРОВАНИЯ ПОКУПОК ПРИ НАЖАТИИ НА КНОПКУ НА КАРТИНКЕ
        buttonProductFromJSON.addEventListener('click', () => {

            let buff = {};
            buff.id = articleProductFromJSON.dataset.id;
            buff.count = 0;
            if (cartItems.length > 0) {
                cartItems.forEach(e => {

                    if (e.id === buff.id) {
                        buff = e;
                    }
                });
            }
            if (buff.count < Number(element.quantity)) {
                buff.count++;

                if (buff.count === 1) {
                    cartItems.push(buff);
                    ProductDoseNotInCart();
                }
                else {
                    ProductIsInCart(buff);
                }
            }
            else {
                alert("There is not enough goods in stock");
            }
        });

        buttonProductFromJSON.addEventListener('click', () => {

            document.querySelector('.cart').dataset.visible = "true";


        });


        //КОНЕЦ 12 ДЗ
        //---------------------------------------------------------------------//

        let buttonImgProductFromJSON = document.createElement('img');
        buttonImgProductFromJSON.src = element.button_img;
        buttonImgProductFromJSON.alt = element.button;
        buttonProductFromJSON.appendChild(buttonImgProductFromJSON);

        let buttonspanProductFromJSON = document.createElement('span');
        buttonspanProductFromJSON.innerText = element.button;
        buttonProductFromJSON.appendChild(buttonspanProductFromJSON);


    });
}

function FillBenifits() {
    let data = JSON.parse(benifits);
    console.log(data);
    data.forEach(element => {

        let benefitFromJSON = document.createElement('article');
        benefitFromJSON.classList.add('benifit');
        document.querySelector('.benefits').appendChild(benefitFromJSON);

        let imgBenefitFromJSON = document.createElement('img');
        imgBenefitFromJSON.src = element.pic;
        imgBenefitFromJSON.alt = element.alt_pic;
        benefitFromJSON.appendChild(imgBenefitFromJSON);

        let h3BenefitFromJSON = document.createElement('h3');
        h3BenefitFromJSON.innerText = element.title;
        benefitFromJSON.appendChild(h3BenefitFromJSON);

        let pBenefitFromJSON = document.createElement('p');
        pBenefitFromJSON.innerText = element.description;
        benefitFromJSON.appendChild(pBenefitFromJSON);
    });
}





document.addEventListener('DOMContentLoaded', () => {
    FillFeturedItems();

    FillBenifits();
});