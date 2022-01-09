// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
//     Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }


function inter (obj1, obj2) {

    const obj1Key = Object.keys(obj1);
    return obj1Key.reduce((acc = {}, key) => {
        if (obj1[key] === obj2[key]){
            acc = {
                ...acc,
                [key] : obj1[key],
            };
        }
        return acc;
    },
        {});
}

console.log(inter({ a: 1, b: 2 }, { c: 1, b: 2 }))

module.exports = { inter };