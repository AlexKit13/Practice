const { isEmptyObject } = require("../task4");

describe('isEmptyObject', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('checking object for emptiness', () => {
        expect(isEmptyObject({a: 1})).toBe(false);
    });

    test(' undefined its empty object', () => {
        expect(isEmptyObject({ a: undefined })).toBe(true);
    });

    test('empty object ', () => {
        expect(isEmptyObject({})).toBe(true);
    });
});
