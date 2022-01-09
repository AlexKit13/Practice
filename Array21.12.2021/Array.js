/**
 * Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
 * function getNumber (array) { let result ; //Your code here
 * return result; }
 * getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) //returns 4 getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13
 */


function getNumber (array) {
    for (let result = 0; result < array.length; result++) {
        if (array[result] % 2 == 0) {
            return array[result];
        }
    }
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));

function getNumber2 (array2) {
    for (let result = 0; result < array2.length; result++) {
        if (array2[result] % 2 !== 0) {
            return array2[result];
        }
    }
}
console.log(getNumber2([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));

/**
 * Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение –
 * количество повторений символов в строке
 */

function countCharacters(string) {
    let count = {};

    for (let result = 0; result < string.length; result++) {
        if (count[string[result]]) {
            count[string[result]]++;

        }
        else {
            count[string[result]] = 1;

        }
    }
    return count;
}
console.log(countCharacters('sparrow'));
console.log(countCharacters('aabcddeffge'));
console.log(countCharacters('a 2ab !d'.replace(/\s/g, '').replace(/[^a-zа-яё0-9\s]/gi, '')));

/**
 * 1.Составьте алгоритм, который считает, сколько времени вам нужно на
 * приготовление яиц.
 * Правила:
 * -Яйца варить 5 минут
 * -Вместительность емкости не более 5 яиц одновременно
 */
let emcost = 5;
let time = 5;
function getCookingTime(eggsAmount) {
        if (eggsAmount === 0) {
             return 0;
         }
        if (eggsAmount <= emcost) {
            return time;
        }
        if (eggsAmount > emcost) {
            return time * 2;
        }
}
console.log(getCookingTime(0));


/**
 * Принимая число, ваша функция должна найти следующий
 * положительный палиндром большего размера.
 */

function reverse(nums) {
    let reverse = "";
    for (let i = String(nums).length - 1; i >= 0; i--) {
        reverse = reverse + String(nums)[i];
    }
    return reverse;
}

function Palindrome(num) {
    if(num < 10){
        return 11;
    }
    for (let i = num + 1;  ; i++) {
        if (String(i) === reverse(i)) {
            return i
        }
    }
}
console.log(Palindrome(99))



/**
 * Принимая массив объектов и случайную строку. У объектов может
 * быть ключ: «title» с разными значениями. Создайте алгоритм, который
 * фильтрует массив, заданный как первый параметр, и возвращает массив
 * объектов, которые содержат в своих заголовках заданную строку в
 * качестве второго параметра (без учета регистра)
 */
function findTitle(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        for (let keys in arr[i]){
            if(keys=='title'){
                //arr[i] - massiv
                //arr[i][keys] - object
                if (arr[i][keys]
                    //v lower
                    .toLowerCase()
                    //poisk
                    .indexOf(str.toLowerCase()) !== -1) {
                    console.log(keys);
                    result[result.length] = arr[i];
                    break;
                }
            }
        }
    }
    return result
}

let arr =
    [{title: 'Some title1'},
    {title: 'I like JS'},
    {user: 'This obj does not have key title js'},
    {title: 'Js - is the best!'}];
console.log(findTitle(arr, 'js'));
// return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]




