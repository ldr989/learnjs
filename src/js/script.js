/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

console.log(NaN || 2 || undefined); //2

console.log(NaN && 2 && undefined); // NaN

console.log(1 && 2 && 3); // 3

console.log(!1 && 2 || !3); // false

console.log(25 || null && !3); // 25

console.log(NaN || null || !3 || undefined || 5); // 5

console.log(NaN || null && !3 && undefined || 5); // 5

console.log(5 === 5 && 3 > 1 || 5); //true
 */
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
/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 30) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Да вы киноман!');
}
console.log(personalMovieDB); */

/* vol 2.0 with ternary operator*/
/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    (a != null && b != null && a != '' && b != '' && a.length < 30) */
    /* ? personalMovieDB.movies[a] = b : console.log('error');
    (a != null && b != null && a != '' && b != '' && a.length < 30) ? console.log('done') : i--;
    (personalMovieDB.count < 10) ? console.log('Просмотренно довольно мало фильмов'): 
    (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель'):
    (personalMovieDB.count >= 30) ? console.log('Да вы киноман!'): console.log('хня');
};

console.log(personalMovieDB); */


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
function findMaxNumber(a, b, c, d) {
    if (/* arguments.length !== 4 ||  */typeof (a, b, c, d) !== 'number') {
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
/* let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i++;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Да вы киноман!");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}



showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`);
    }
}

writeYourGenres();
 */
