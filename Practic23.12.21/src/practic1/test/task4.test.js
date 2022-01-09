const { checkNumber } = require("../task4");

describe('checkNumber', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('prime, even number, number is a multiple of 10', () => {
        expect(checkNumber( 7)).toEqual([ true, false, false ]);
    });

    test('prime, even number, number is a multiple of 10', () => {
        expect(checkNumber( 10)).toEqual([ false, true, true ]);
    });

    test('prime, even number, number is a multiple of 10', () => {
        expect(checkNumber( 11)).toEqual([ true, false, false ]);
    });


});