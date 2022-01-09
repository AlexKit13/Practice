const { deepObject } = require("../task2");

describe('isPalindrome', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('isPalindrome', () => {
        expect(isPalindrome('aaaaaa')).toBe(true);
    });