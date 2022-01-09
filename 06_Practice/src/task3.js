// Напишите функцию, которая убирает повторяющиеся значения в массиве. Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function uniq() {
    const array = [1,2,3,1,2];
    return  array.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}
console.log(uniq())

module.exports = { uniq };