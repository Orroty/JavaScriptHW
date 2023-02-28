console.clear();

//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
//10 – четное число

nRowsTask1 = 11;

for (let i = 0; i < nRowsTask1; i++) {
    console.log(`${i} - ${(i == 0) ? "это ноль" : (((i % 2) == 0) ? "четное число" : "нечетное число")}`);
}

//Задание 2
//Дан массив[1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий[1, 2, 3, 6, 7]

let arrTask2 = [1, 2, 3, 4, 5, 6, 7];

console.log(arrTask2);
arrTask2.splice(3, 2);
console.log(arrTask2);


//Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

let arrTask3 = [];
for (let i = 0; i < 5; i++) {
    arrTask3.push(getRandom(10));
}

console.log(arrTask3);

//1. Рассчитать сумму элементов этого массива
// Используя forech
let summArrTask3 = 0;
arrTask3.forEach(e => summArrTask3 += e);
console.log(`Сумма всех элементов равна ${summArrTask3}`);

// Используя reduce
console.log(`Сумма всех элементов равна ${arrTask3.reduce((sum, a) => sum + a, 0)}`);

//2. Найти минимальное число
// Используя forech
let minArrTask3 = arrTask3[0];
arrTask3.forEach(e => ((e < minArrTask3) ? minArrTask3 = e : minArrTask3 = minArrTask3));
console.log(`МИнимальный элемент равен ${minArrTask3}`);

// Используя существующий Math.min
console.log(`МИнимальный элемент равен ${Math.min(...arrTask3)}`);

//3. Найти есть ли в этом массиве число 3

let find3InArrTask3 = -1;
find3InArrTask3 = arrTask3.findIndex(item => item == 3);
if (find3InArrTask3 === -1) {
    console.log("3 в массиве отсутствует");
}
else {
    console.log(`3 в массиве имеет индекс ${find3InArrTask3} и расположена на  ${find3InArrTask3 + 1} позиции`);
}


//    * Необязательное задание. *
//        Необходимо вывести горку в консоль(используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

//x
//xx
//xxx
//xxxx
//xxxxx
let nRowsTask4 = 20
// 1 метод без создания стринговой переменной
for (let i = 0; i < nRowsTask4; i++) {
    console.log("x".repeat(i + 1));
}
// 2 метод с созданием переменной типа стринг
let xtext = "";
for (let i = 0; i < nRowsTask4; i++) {
    xtext += "x";
    console.log(xtext);
}