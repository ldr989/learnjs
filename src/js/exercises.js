'use strict';
/* for (let i = 20; i >= 10; i--) {
    if (i == 13){
        break;
    }
    console.log(i);
} */

/* function sayHello(text) {
    text = 'Привет, '+ text;
    return console.log(typeof text);
}

sayHello('Антон'); */

/* function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Антон'); */

/* function returnNeighboringNumbers(number) {
    let arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
    return arr;

}
console.log(returnNeighboringNumbers(5)); */



/* function calcSumm(numOne, numTwo) {
    let result = 1;
    for (let i = 0; i < numTwo; i++){
        result *= numOne;
    }
    return result;
}
console.log(calcSumm(2, 4)); */

/* function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0 ){
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    return str;
}

console.log(getMathResult(2, 2)); */

/* function calculateVolumeAndArea(edgesOfCube){ // мой вариант домашнего задания
    const volumeOfCube = edgesOfCube * edgesOfCube * edgesOfCube;
    const areaOfFaceOfCube = edgesOfCube * edgesOfCube;
    const areaOfCube = areaOfFaceOfCube * 6;
    const calcSumm = "'"+'Объем куба: ' + volumeOfCube + ', площадь всей поверхности: ' + areaOfCube + "'";
    const shortOne = edgesOfCube !== null && edgesOfCube !== '' && edgesOfCube > 0;
    const shortTwo = Number.isInteger(edgesOfCube) && typeof edgesOfCube != 'string';

    if (shortOne && shortTwo ) {
        return console.log(calcSumm);
    } else {
        return console.log('При вычислении произошла ошибка');
    }
}
calculateVolumeAndArea(3);

function calculateVolumeAndArea(length) { // вариант учителя
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
} */

/*
//Мой вариант решения задачи №7
function getCoupeNumber(num) {

    if (num >= 1 && num <=4 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(1);
    } else if (num >= 5 && num <= 8 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(2);
    } else if (num >= 9 && num <= 12 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(3);
    } else if (num >= 13 && num <= 16 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(4);
    } else if (num >= 17 && num <= 20 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(5);
    } else if (num >= 21 && num <= 24 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(6);
    } else if (num >= 25 && num <= 28 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(7);
    } else if (num >= 29 && num <= 32 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(8);
    } else if (num >= 33 && num <= 36 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log(9);
    } else if (num === 0 || num > 36 && num !== 'number' && num > 0 && Number.isInteger(num)) {
        return console.log('Таких мест в вагоне не существует');
    } else {
        return console.log('Ошибка. Проверьте правильность введенного номера места');
    }
}

getCoupeNumber('Hello');


//Вариант Ивана Петриченко

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return console.log(Math.ceil(seatNumber / 4));
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(1);
 */

/* // Упражнение 8.1 мой вариант решения:
function getTimeFromMinutes(time) {
    if (typeof (time) !== "number" || time < 0 || !Number.isInteger(time)) {
        return console.log('Ошибка, проверьте данные');
    }

    let mins = time % 60;
    let hours = (time - mins) / 60;
    let hourDecl,
        minDecl;
    if (hours === 1) {
        hourDecl = 'час';
    } else if (hours >= 2 && hours <= 4) {
        hourDecl = 'часа';
    } else if (hours === 0 || hours >= 5) {
        hourDecl = 'часов';
    }

    if (mins === 1) {
        minDecl = 'минута';
    } else if (mins % 10 === 2 || mins % 10 === 3 || mins % 10 === 4) {
        minDecl = 'минуты';
    } else {
        minDecl = 'минут';
    }

    let result = `Это ${hours} ${hourDecl} и ${mins} ${minDecl}`;
    return console.log(result);
}

getTimeFromMinutes(11);

// Упражнение 8.1 вариант Ивана Петриченко:
function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180); */

// Упражнение 8.2 мой вариант решения:

/* function findMaxNumber(a, b, c, d) {
    if (typeof (a, b, c, d) !== 'number') {
        return console.log(0);
    } else {
        return console.log(Math.max(a, b, c, d));
    }

}
findMaxNumber(23, -3, 42, 222);

// Упражнение 8.2 вариант Ивана Петриченко:

function findMaxNumber(a, b, c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return console.log(0);
    } else {
        return console.log(Math.max(a, b, c, d));
    }
}
findMaxNumber(23, -3, 42, 122);
 */

// Упражнение 9 (Числа Фибоначчи). Мой вариант:
/*  
function fib(num) {
    let a = 0,
        b = 1;

    let fibDB = [];
        fibDB[0] = 0;
        fibDB[1] = 1;

    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
        fibDB.push(b);
    }
    if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
        return console.log('');
    } else if (num === 1) {
        return console.log('0');
    } else if (num === 2) {
        return console.log('0 1');
    } else {
        return console.log(fibDB.join(' '));
    }
}
fib(2);

// Упражнение 9 (Числа Фибоначчи). Вариант Ивана Петриченко:

function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return console.log(result);
}

fib(2);
 */
/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            java: '60%',
            pithon: '10%',
            с: '10%',
            go: '5%',
            fortran: '0%'
        },
        exp: '1 month'
    }
}; */

/* function showExperience(plan) {
    const exp = plan.skills.exp;
    return console.log(exp);
}
showExperience(personalPlanPeter); */
/* function showProgrammingLangs(plan) {

    const langs = plan.skills.programmingLangs;

    const keyNum = Object.keys(langs);
    const optNum = Object.values(langs); */
/* for (let key in langs) {
    if (keyNum.length == 2) {
        return console.log(`Язык ${keyNum[0]} изучен на ${optNum[0]} Язык ${keyNum[1]} изучен на ${optNum[1]}`);
    }

    
} */
/* let answer = []; */

/* for (let i = 1; i <= keyNum.length; i++) {
    console.log(`Язык ${keyNum[i-1]} изучен на ${optNum[i-1]}`);
} */
/* let i = 0;
do {
    answer.push(`Язык ${keyNum[i]} изучен на ${optNum[i]}\n`);
    i++;
} while (i < keyNum.length);
if (keyNum.length > 0) {
    return console.log(answer.join(''));
} else {
    return console.log('');
}
}
showProgrammingLangs(personalPlanPeter); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}; */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
};
 */

/* let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}
 */

/* let result = '';
const length = 100;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*"
    }

    result += '\n';
}

console.log(result); */

/*
let i = 5;
while (i < 11) {
    console.log(i);
    i++;
} */


/* for (let i = 20; i > 12; i--) {
    console.log(i);
} */

/* for (let i = 2; i < 11; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
} */



/* for (let i = 20; i > 10; i--) {
    if (i == 13) {
        break;
    }
    console.log(i);
    }
 */

/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */



/* let i = 3;
while (i <= 15) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
} */
/* const arrayOfNumbers = [];
arrayOfNumbers[0] = 5;
arrayOfNumbers[1] = 6;
arrayOfNumbers[2] = 7;
arrayOfNumbers[3] = 8;
arrayOfNumbers[4] = 9;
arrayOfNumbers[5] = 10;
console.log(arrayOfNumbers); */



/* function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
} */


/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
result.push(...arr);
console.log(result.length); */


/* function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof (data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
} */

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

/* const lines = 10;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result); */

/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            java: '60%',
            pithon: '10%',
            с: '10%',
            go: '5%',
            fortran: '0%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const age = plan.age;
        let languages = plan.skills.languages;
        let newLanguages = languages.join(' ');
        console.log(`Мне ${age} и я владею языками: ${newLanguages.toUpperCase()}`);
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showProgrammingLangs(plan) {

    const langs = plan.skills.programmingLangs;

    const keyNum = Object.keys(langs);
    const optNum = Object.values(langs);
    let answer = [];

    let i = 0;
    do {
        answer.push(`Язык ${keyNum[i]} изучен на ${optNum[i]}\n`);
        i++;
    } while (i < keyNum.length);
    if (keyNum.length > 0) {
        return console.log(answer.join(''));
    } else {
        return console.log('');
    }
}
showProgrammingLangs(personalPlanPeter); */

// Exercise 11.1

/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const members = arr.join(' ');
    if (typeof (members) == 'string', members !== '') {
        return console.log(`Семья состоит из: ${members}`);
    } else {
        return console.log('Семья пуста');
    }
}
showFamily(family); */

// Exercise 11.2

/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const cities = arr.join('\n');
    console.log(cities.toLowerCase());
}

standardizeStrings(favoriteCities); */

// Exercise 12.1

/* const someString = 'This is some strange string';

function reverse(str) {
    
    if (typeof str === 'string') {
        str = str.split("").reverse().join("");
        console.log(str);
    } else {
        console.log("Ошибка!");
    }
    
}

reverse(someString); */

// Exercise 12.2

/* const baseCurrencies = ['USD', 'EUR']; 
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = ['USD', 'EUR', 'UAH', 'RUB', 'CNY'];
const arr = [...baseCurrencies, ...additionalCurrencies]; // all available currencies

Array.prototype.diff = function (a) {
    return this.filter(function (i) { return a.indexOf(i) < 0; });
};

let missingCurr = allCurrencies.diff(arr); //currencies that are missing

function availableCurr(arr, missingCurr) { 
    if (arr.length == 0) {
        return console.log('Нет доступных валют');
    } else {
        arr.forEach(function(item, i, arr){
            if (item == missingCurr) {
                arr.splice(i, 1);
            }
        });
        console.log(`Доступные валюты:\n${arr.join("\n")}\n`);
    }
}
availableCurr(arr, missingCurr); */



/* Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB */

// Task 13

const shoppingMallData = {  // обьект
    shops: [                // массив
        {                   // обьект
            width: 10,      // значения
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    // total area of all shops m2
    let areaCalc = 0;
    for (let i = 0; i < data.shops.length; i++) { 
        areaCalc += data.shops[i].width * data.shops[i].length;
    }
    // total cubic capacity of all stores m3
    const cubicCapacity = areaCalc * data.height;
    // cost calculation
    const cost = cubicCapacity * data.moneyPer1m3;
    // comparison with budget
    if (data.budget >= cost) {
        return console.log('Бюджета достаточно');
    } else {
        return console.log('Бюджета недостаточно');
    }
}

isBudgetEnough(shoppingMallData);