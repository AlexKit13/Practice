// Напишите функцию, которая делает поверхностную проверку объекта на пустоту. Ожидаемый результат:
//     ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false


function isEmptyObject(obj) {
    if (Object.values(obj).includes(undefined)) {
        return true;
    } else if (Object.keys(obj).length == 0) {
        return true;
    } else {
        return false;
    }
}
    console.log(isEmptyObject({ a: 1 }));

module.exports = { isEmptyObject };

