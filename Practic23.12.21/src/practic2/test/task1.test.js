const { yourFuncName } = require("../task1");

describe('yourFuncName', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('yourFuncName valid', () => {
        expect(yourFuncName(4)).toBe('12three 4');
    });


});