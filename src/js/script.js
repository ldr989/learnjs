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

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

/* const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i++;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Да вы киноман!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) { */
            /* let genres = prompt(`Ваш любимый жанр по номером ${i}`).toLowerCase();
            if (genres ==="" || genres == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            } */
            /* let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === "" || genres == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
}; */

// task 15

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};
const openNow = restorantData.openNow;

function isOpen(prop) {
    let answer = prop ? 'Открыто' :'Закрыто';
    

    return answer;
}

console.log(isOpen(openNow));


function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
        
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {

    let copy = Object.assign({}, data);
    
    copy.menu = data.menu.slice();
    copy.waitors = data.waitors.slice();

    copy.waitors[0] = { name: 'Mike', age: 32 };
    return console.log(copy);
}


transferWaitors(restorantData);
console.log(restorantData);



