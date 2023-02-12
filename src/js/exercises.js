'use strict';

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

const baseCurrencies = ['USD', 'EUR']; 
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
availableCurr(arr, missingCurr);



/* Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB */