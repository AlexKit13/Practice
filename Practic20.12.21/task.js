/**
 1)    Cоздать функцию, которая возвращает true или false, в зависимости от того, может ли сумма любых двух чисел из
 массива быть равной заданному значению.
 **/


let arr = [1, 2, 4, 4];

function array(value) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === value) {
                return true;
            }
            ;
        }
        ;
    }
    ;
    return false;
};

console.log(array(8));

/**
 2) Напишите функцию, которая преобразует глубокий массив в одномерный. Не используйте array.flat()
 **/

let array3 = [1, 2, [3, 4, [5]]];
let str = array3.toString();
let b = str.split(",");
console.log(b)


/**
 3)Напишите функцию, которая разделяет массив на части заданного размера.
 Ожидаемый результат: [1, 2, 3, 4, 5]  => [[1, 2], [3, 4], [5]]
 **/
//let result = [].concat(...array3) + '';

let array5 = [1, 2, 3, 4, 5];
let size = 2;
let newArray = [];
for (let i = 0; i < Math.ceil(array5.length/size); i++){
    newArray[i] = array5.slice((i*size), (i*size) + size);
}
console.log(newArray);

/**
 * Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 */

let obj = { a: 1, b: 1 };
let obj2 = { a: 1, b: 1 };

console.log(JSON.stringify(obj) === JSON.stringify(obj2));







