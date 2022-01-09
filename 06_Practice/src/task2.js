// Напишите функцию, которая делает глубокое сравнение объектов.
//     Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

function deepObject(){
    let obj1 = { a: 1, b: { c: 1 } };
    const obj2 = { a: 1, b: { c: 1 } };

    const areObject = typeof obj1 === 'object' && typeof obj2 === 'object'

}

console.log();

// console.log(key)
// console.log(obj1[key])
// console.log(typeof key)




// module.exports = { deepObject };