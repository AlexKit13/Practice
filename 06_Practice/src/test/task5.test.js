const { info } = require("../task5");

describe('info', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('object crossings', () => {
        expect(info('27' ,  'Front - End')).toBe( undefined);
    });

});