console.clear();


//Задание 1
//Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени

//Эксперементы с разными функциями возведения в степень + смотрел как работает побитовые операции в JS
function BinPow(number, degree) {
    let result = 1.0;
    while (degree != 0) {
        if ((degree & 1) != 0) {
            result *= number;
        }
        number *= number;
        degree >>= 1;
    }
    return result;
}


function Cubing(num) {
    return BinPow(num, 3);
}
function FirstTask() {
    console.log(` 2 ^ 3 степени равно ${Cubing(2)}
 3 ^ 3 степени равно ${Cubing(3)}`);

    let numToCub = +prompt("Введите число для возведения в куб");

    console.log(`${numToCub} ^ 3 степени равно ${Cubing(numToCub)}`);
}

FirstTask();
// Сравнивал время, не относится к заданию
//let datestart = Date.now();
//console.log(BinPow(16, 19));
//let timeforbinpow = Date.now() - datestart;
//datestart = Date.now();
//console.log(Math.pow(16, 19));
//let timeforpow = Date.now() - datestart;
//console.log("Binpow - " + timeforbinpow + " Pow - " + timeforpow);
//console.log("Bin-pow = " + (timeforbinpow-timeforpow)  );


//Задание 2
//Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

//Проверяет является введеное значение числом, если да, то вернет true
function CheckNumPrompt(text) {
    text = parseInt(text, 10);
    if (isNaN(text)) { return false; }
    return true;
}

// Вывод размера за вычетом %. Строковые переменные преобразуются к int если это возможно.
function Get13Persents(num) {
    console.log(`Размер заработной платы за вычетом налогов равен значение ${num - (num * 0.13)}`);
}

function SecondTask() {
    let numZP = prompt("Введите число - значение з.п");
    (CheckNumPrompt(numZP)) ? Get13Persents(numZP) : console.log("Значение задано неверно");

}
SecondTask();


//Задание 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


function FindMaxOf3(num1, num2, num3) {
    return (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
}

// Не работает с NaN
function FindMaxOf3Ver2(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ThirdTask() {
    let num1From3Task = +prompt("Введите 1 число"), num2From3Task = +prompt("Введите 2 число"), num3From3Task = +prompt("Введите 3 число");

    console.log(`Из 3 чисел: ${num1From3Task}, ${num2From3Task} и ${num3From3Task} максимальным является: ${FindMaxOf3(num1From3Task, num2From3Task, num3From3Task)}`);
    console.log(`Из 3 чисел: ${num1From3Task}, ${num2From3Task} и ${num3From3Task} максимальным является: ${FindMaxOf3Ver2(num1From3Task, num2From3Task, num3From3Task)}`);

}
ThirdTask();
//Задание 4
//Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление
//Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль(sum - функция сложения в данном примере, ваши названия функций могут отличаться).Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function SummNum(num1, num2) {

    return num1 + num2;
}
//Не работает с NaN
function DiffNum(num1, num2) {

    return Math.max(num1, num2) - Math.min(num1, num2);
}

// Тоже самое, но без Math max/min
function DiffNum2(num1, num2) {

    return (num1 > num2) ? (num1 - num2) : (num2 - num1);
}

function MultiNum(num1, num2) {

    return num1 * num2;
}
function DivNum(num1, num2) {

    return num1 / num2;
}

function FourthTask() {
    console.log(SummNum(2, 6));
    console.log(DiffNum(2, 6));
    console.log(DiffNum(6, 2));
    console.log(MultiNum(2, 6));
    console.log(DivNum(2, 6));

    console.log(DiffNum2(2, 6));
    console.log(DiffNum2(6, 2));
}

FourthTask();