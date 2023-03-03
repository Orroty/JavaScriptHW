console.clear();

//Задание 1
//Дан объект numbers.Необходимо в консоль вывести все значения больше или равные 3.

//const numbers = {
//    keyin1: 1,
//    keyin2: 2,
//    keyin3: 3,
//    keyin4: 4,
//    keyin5: 5,
//    keyin6: 6,
//    keyin7: 7,
//}

function Task1() {
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }
    console.log("Task1");

    console.log(numbers);

    //Эксперимент с анонимной функцией
    console.log((function () {
        let rez = [];
        for (let val in numbers) {
            if (numbers[val] >= 3) {
                rez.push(numbers[val]);
            }
        }
        return rez;
    })());

    // Используя Object.values
    console.log(Object.values(numbers).filter(e => e >= 3));

}

Task1();

//Задание 2
//Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

//const post = {
//    author: "John", // вывести этот текст
//    postId: 23,
//    comments: [
//        {
//            userId: 10,
//            userName: "Alex",
//            text: "lorem ipsum",
//            rating: {
//                likes: 10,
//                dislikes: 2, // вывести это число
//            },
//        },
//        {
//            userId: 5, // вывести это число
//            userName: "Jane",
//            text: "lorem ipsum 2", // вывести этот текст
//            rating: {
//                likes: 3,
//                dislikes: 1,
//            },
//        },
//    ],
//};

function Task2() {
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };
    console.log("Task2");
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

Task2();

//Задание 3
//Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.

//const products = [
//    {
//        id: 3,
//        price: 200,
//    },
//    {
//        id: 4,
//        price: 900,
//    },
//    {
//        id: 1,
//        price: 1000,
//    },
//];

function Task3() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    console.log("Task3");
    console.log();

    // Без копирования - меняет значения сразу в products

    //products.forEach(e => e.price = e.price * 0.85);
    //console.log(products);

    // Создание глубокой копии, чтобы не менять изначальный массив используя Object.assign

    let clone1 = [];
    products.forEach((value, index) => { clone1[index] = Object.assign({}, value); clone1[index].price *= 0.85; });


    // Создание глубокой копии, чтобы не менять изначальный массив используя structuredClone

    let clone2 = structuredClone(products);
    clone2.forEach(e => e.price = e.price * 0.85);

    console.log("Products:");
    console.log(products);
    console.log("Clone1: (Object.assign)");
    console.log(clone1);
    console.log("Clone2: (structuredClone)");
    console.log(clone2);



}
Task3();

//Задание 4
//1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.
//2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

//```
//const products = [
//{
//id: 3,
//price: 127,
//photos: [
//"1.jpg",
//"2.jpg",
//],
//},
//{
//id: 5,
//price: 499,
//photos: [],
//},
//{
//id: 10,
//price: 26,
//photos: [
//"3.jpg",
//],
//},
//{
//id: 8,
//price: 78,
//},
//];

//[]()
//[]()


function Task4() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
    ];


    console.log("Task4");
    console.log("Products:");
    console.log(products);
    console.log("Products with photos:");
    console.log(products.filter(e => e.photos?.length > 0));
    console.log("Products sort by price:");
    console.log(products.sort((a, b) => a.price - b.price));
}

Task4();

//**Задание 5**
//Дано 2 массива
//const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
//```


//Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function Task5() {
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    let rezult = {};
    en.forEach((val, ind) => rezult[val] = ru[ind]);
    console.log(rezult);
}

Task5();