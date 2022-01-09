const { isPalindrome } = require("../task1");

describe('isPalindrome', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('isPalindrome', () => {
        expect(isPalindrome('aaaaaa')).toBe(true);
    });

    test('is string', () => {
        expect(isPalindrome('')).toBe(false);
    });

    test('number is not string', () => {
        expect(isPalindrome('')).toBe(false);
    });

});