const { isSymbol, checkSymbol, isValidString } = require("../task3");

describe('isSymbol', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('check symbol', () => {
        expect(checkSymbol( '!')).toBe(true);
    });

    test('check input only lower string', () => {
        expect(isValidString( 'sgfdfhgfh')).toBe('INVALID');
    });

    test('check input number', () => {
        expect(isValidString( 123)).toBe('INVALID');
    });

    test('string less 2 symbols', () => {
        expect(isValidString( 'g')).toBe('INVALID');
    });

    test('string more 20 symbols', () => {
        expect(isValidString( 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')).toBe('INVALID');
    });

    test('incorrect input data', () => {
        expect(isValidString( null)).toBe('incorrect input data');
    });

    test('entering valid values', () => {
        expect(isValidString( 'Gdffdf!')).toBe('VALID');
    });

});