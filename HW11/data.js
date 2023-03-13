//Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

//В блоке Featured Items небходимо реализовать шаблон товаров.

//Для этого необходимо создать json формат данных по всем товарам.

//Из этого файла сформировать блок Featured Items.

//Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html / css можно использовать, заново создавать не требуется.


const featuredItems = `[
    {
        "img": "./img/product_1.jpg",
        "img_alt": "Product 1",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
       "button_path":"document.location='../index.html'"
    },
    {
        "img": "./img/product_2.png",
        "img_alt": "Product 2",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "button_path":"document.location='../index.html'"
    },
    {
        "img": "./img/product_3.png",
        "img_alt": "Product 3",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "button_path":"document.location='../index.html'"
    },
    {
        "img": "./img/product_4.png",
        "img_alt": "Product 4",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "button_path":"document.location='../index.html'"
    },
    {
        "img": "./img/product_5.png",
        "img_alt": "Product 5",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "button_path":"document.location='../index.html'"
    },
    {
        "img": "./img/product_6.png",
        "img_alt": "Product 6",
        "title": " ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": " $52.00",
        "button": "Add to Cart",
        "button_img": "./img/add_to_cart_pic.svg",
        "button_path":"document.location='../index.html'"
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