function isSymbol(char){
    return ',.!:-_? '.includes(char)
}

function checkSymbol(str){
return [',', '.', '!', ':', '-', '_', '?', ' '].some((symbol) => str.includes(symbol));
}

function isValidString(str){
if(str || typeof str === 'string'){
    if(str.length >= 2 && str.length <= 20 && checkSymbol(str) && (!isSymbol(str[0]) || str[0] === str[0].toUpperCase())){
        return 'VALID'
    }else {
        return 'INVALID'
    }

}
return 'incorrect input data'
}

console.log(checkSymbol('!'))


module.exports = { isSymbol,  checkSymbol, isValidString };