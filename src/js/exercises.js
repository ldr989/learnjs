/* 'use strict';

const personalPlanPeter = {
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

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

}