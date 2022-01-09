const { inter } = require("../task1");

describe('inter', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('object crossings', () => {
        expect(inter({ a: 1, b: 2 } ,  { c: 1, b: 2 })).toEqual({ b: 2 });
    });

});