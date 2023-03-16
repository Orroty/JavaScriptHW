//Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

//В блоке Featured Items небходимо реализовать шаблон товаров.

//Для этого необходимо создать json формат данных по всем товарам.

//Из этого файла сформировать блок Featured Items.

//Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html / css можно использовать, заново создавать не требуется.


//Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=4203%3A2&t=q4NMnXTnwyyTSGA6-0

//На предыдущем уроке вы сформировали данные из раздела "Товары".

//При клике на кнопку add to cart у товара под блоком с акциями появляется раздел Cart items.

//В разделе Cart items появляются товары, добавленные в корзину,

//    При клике на крестик, товар удаляется из из раздела корзины, если удалить все товары, раздел полностью пропадает.

const featuredItems = `[
    {
        "id" : 0,
        "img": "./img/product_1.jpg",
        "img_alt": "Product 1",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "color": "blue",
        "size": "XXL",
        "quantity": "10"
    },
    {
        "id" : 1,
        "img": "./img/product_2.png",
        "img_alt": "Product 2",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "color": "black",
        "size": "L",
        "quantity": "20"
    },
    {
        "id" : 2,
        "img": "./img/product_3.png",
        "img_alt": "Product 3",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "color": "red",
        "size": "XL",
        "quantity": "30"
    },
    {
        "id" : 3,
        "img": "./img/product_4.png",
        "img_alt": "Product 4",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "color": "yellow",
        "size": "M",
        "quantity": "30"
    },
    {
        "id" : 4,
        "img": "./img/product_5.png",
        "img_alt": "Product 5",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "color": "white",
        "size": "M",
        "quantity": "20"
    },
    {
        "id" : 5,
        "img": "./img/product_6.png",
        "img_alt": "Product 6",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "color": "gray",
        "size": "L",
        "quantity": "10"
    }
]`;


const benifits = `[
    {
        "pic": "./img/benefit_pic_1.svg",
        "alt_pic": "Delivery",
        "title": "Free Delivery",
        "description": "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models."
    },
    {
        "pic": "./img/benefit_pic_2.svg",
        "alt_pic": "Discounts",
        "title": "Sales & discounts",
        "description": "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models."
    },
    {
        "pic": "./img/benefit_pic_3.svg",
        "alt_pic": "QA",
        "title": "Quality assurance",
        "description": "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models."
    }
]`;