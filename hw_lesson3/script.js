// Створити пустий об’єкт;
let animal = {};

// Створити пустий об’єкт без прототипу;
let obj = Object.create(null);

// Додати до об’єкта будь які нові поля всіма відомими способами;


// Створити пустий масив;
let arr = [];

// Створити пустий масив довжиною 100500 елементів;
let array = [];
array[100499]=[];

// Створити масив з декількома елементами;
// Зробити заповнений масив пустим;
let mass = [1, 2, true,"hello",false];
mass.length = 0;

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);
let delArr = [1,2,3,4,5]
function deleteIndex(arr1, index){
    arr1.splice(index, 1);
    return delArr
}
deleteIndex(delArr, 3);
console.log(delArr)

// Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
function boolArr(massive){
    massive.length > 0 ? console.log(true) : console.log(false);
}
boolArr([]);

// Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
let emptyObj = {};
function boolObj(obj){
    Object.keys(obj).length > 0 ? console.log(true) : console.log(false);
}
boolObj(emptyObj);

// Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;
function combineArr(x, y) {
    let combinedArr = x.concat(y);
    console.log(combinedArr)
}
combineArr([1,2], [3,4]);

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
function powArr(arr) {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(Math.pow(element,3));
    });
    console.log(newArr)
}
powArr([1,7,10]);

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;
let filterMass = [1,2,3,4,5];
function filterArr(value) {
    if(value%2 == 1){
        return true;
    }
}
console.log(filterMass.filter(filterArr));

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];
let intFilterMass = [5, 3.14, 4.1, 10, 11, 20.1];
function intFilterArr(value) {
    if(value % 1 === 0){
        return true;
    }
}
console.log(intFilterMass.filter(intFilterArr));

// Створити функцію, яка нічого не повертає;
function doNothing() {
    return;
}
console.log(doNothing() === undefined);