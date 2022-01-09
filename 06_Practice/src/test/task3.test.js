const { uniq } = require("../task3");

describe(' uniq', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('remove repetitive values', () => {
        expect( uniq([1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
    });

});