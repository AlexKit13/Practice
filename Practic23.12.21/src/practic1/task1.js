function isPalindrome(str) {
    let line = str.length;
    let result = '';

    if(typeof str !== 'string' || str == null || str === ''){
        return false;
    }

    for (let i = 0; i < line; i++) {

        if (str[i] === str[line - 1 - i]) {
            result = 'являеться';
        } else {
            result = 'не являеться';
            return false;
        }

    }
    return true;
}
console.log(isPalindrome('aaaaaaaaa'));

module.exports = { isPalindrome };