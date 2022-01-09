function yourFuncName(number) {
    let result = '';

    for (let i = 1; i <= number; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
result = result.concat('threeFive ')
        }else if (i % 3 === 0){
            result = result.concat('three ')
        }else if (i % 5 === 0){
        result = result.concat('Five ')
    }else {
            result = result.concat(`${i}`)
        }
    }

    return result;

}
const res = yourFuncName(0)
console.log(res)

module.exports = { yourFuncName };