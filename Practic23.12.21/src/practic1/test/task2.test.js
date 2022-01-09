const {calcSum} = require("../task2");

describe('calcSum', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('number plus string equals string', () => {
        expect(calcSum(1 , '13641')).toBe(13642);
    });

    test('number plus string equals NaN', () => {
        expect(calcSum(1 , "dfgdfg")).toBe(NaN);
    });

    test('string plus string equals NaN', () => {
        expect(calcSum('' , '')).toBe(NaN);
    });

});