// Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д),
//  на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase), 
//  яка б поєднувала в собі всі елементи масиву які є строками.
// let mass = ["hello", 1, 3, true, false, 333, 12, true, "pllug", "my", "name", "is", "nazar"]


// function camelCaseStr(newMass) {
//     let strMass = []

//     for (i = 0; i < newMass.length; i++) {

//         if (typeof newMass[i] === "string") {
//             newMass[i] = newMass[i].charAt(0).toUpperCase() + newMass[i].substr(1)
//             strMass.push(newMass[i])

//         }
//     }
//     camelMass = strMass.join('')
//     console.log(camelMass)
// }

// camelCaseStr(mass)



// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26,
//  і повертала б масиву у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу масива
//   (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]
// let massCheck = [10,3,2,21]
// function findLetter(check){
//     let arr_EN = {
//         1: 'a',
//         2: 'b',
//         3: 'c',
//         4: 'd',
//         5: 'e',
//         6: 'f',
//         7: 'g',
//         8: 'h',
//         9: 'i',
//         10: 'j',
//         11: 'k',
//         12: 'l',
//         13: 'm',
//         14: 'n',
//         15: 'o',
//         16: 'p',
//         17: 'q',
//         18: 'r',
//         19: 's',
//         20: 't',
//         21: 'u',
//         22: 'v',
//         23: 'w',
//         24: 'x',
//         25: 'y',
//         26: 'z'
//     }
//     let mass = []
//     console.log(check)
//     for(i = 0 ; i < check.length;i++){
//         if(check[i]>=1 && check[i] <=26){
//             for (const key in arr_EN) {
//                 if(check[i] == key){
//                     mass.push(arr_EN[key])
//                 }
//             }
//         }
//     }
//     console.log(mass)
// }
// findLetter(massCheck)




// Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
// і повертає новий об’єкт у який містить тільки числа більші рівні 0.
// let checkObj = { a: 22, b: -11.35, c: 41.2, d: "hello", e: 55 }

// function newObct(check) {
//     newObj = []
//     console.log(check)
//     for (const key in check) {

//         if (check[key] >= 0) {
//             newObj[key] = check[key]
//         }
//     }
//     console.log(newObj)
// }


// newObct(checkObj)


// Скрипт який виводить в консоль дату і час коли DOM побудований, але css, зображення ще не завантажились.
document.addEventListener('DOMContentLoaded',()=>{
    date = new Date
    console.log("Dom побудований але сss,зображеня ще не завантажились" + date)
})


// Скрипт який виводить в консоль дату і час коли DOM побудований і css, зображення вже завантажились.
document.addEventListener('DOMContentLoaded',()=>{
    console.log(" DOM побудований і css, зображення вже завантажились." + date)
})

//Скрипт який виводить в консоль дату і час коли юзер натиснув на закрити вкладку або перезавантажити сторінку.
window.onbeforeunload = function () {
    console.log(Date())
}














