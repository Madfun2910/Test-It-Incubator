// 8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую
let a = "Swap";
let b = "Me";
[a, b] = [b, a];
console.log(a, b);


// 9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
//(Помог гугл)
let Arr = [3, -5, 23, 400, 455, 32, 1344]

const findMax = (maxNumberInArray) => {
    maxNumberInArray = Arr;
    return Math.max.apply(null, Arr);
};
console.log(`Max number: ${findMax()}`);

// 6.Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры

const superSum = (n1, n2) => {
    return n1 + n2;
};

alert(superSum(300, 122));


// 3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
// 4. Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
// 5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве

const mInput = document.querySelector("input");
const mButton = document.querySelector("button");
const objects = [
    { name: "Pavel", age: 30 },
    { name: "Sergey", age: 32 },
    { name: "Dmitriy", age: 56 },
    { name: "oksфna", age: 12 },
];

mButton.onclick = () => {
    (mInput.value === "google")

        ?
        setTimeout( // 10 тое задание
            () =>
                alert(
                    `Yandex круче. Но это не точно`
                ),
            3000
        )
        : alert(
            `${mInput.value} name первого объекта в массиве: ${objects[0].name}`
        );
};

// 7. Создать массив из чисел в перемешку (не отсортированы). С помощью цикла for найти максимальный и минимальный элементы в массиве.
// самое сложное для меня задание, перерыл интернет вдоль и поперек чтобы разобраться, хотя счас вроде и не сложно
const randomArr = [1000, 207, 3089, 436, 222666, 40033, 4533, -10];

const MinMax = () => {
  let   min = Arr[0],
        max = Arr[0];

  for (let i = 1; i < Arr.length; i++) {
    let value = Arr[i];
    min = value < min ? value : min;
    max = value > max ? value : max;
  }

  return [min, max];
};
const [Min,Max] = MinMax();
console.log(`${Min},${Max}`);

