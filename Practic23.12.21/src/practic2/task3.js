function charObject(str){
    const obj = {};
    str = str.toLowerCase();
    for(let char of str ){
        obj[char] = obj[char] + 1 || 1
    }
    return obj;
}
function anagram(Str1, Str2){
    const objA = charObject(Str1);
    const objB = charObject(Str2);
    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return ('two lines are not anagrams');
    }
    for (let char in objA) {
        if (objA[char] !== objB[char]) {
            return false;
        }
    }
    return ('two lines are anagrams');
}
console.log(anagram('наа', 'Рпоро'))

module.exports = { charObject, anagram };