const soma = require('../soma');


test('Soma 2 + 3 e obtém 5', () => {
    let result = soma(2, 3);
    expect(result).toBe(5);
})

test('Soma -99 + -4', () => {
    let result = soma(-99, -14);
    expect(result).toBe(-113);
})

test('Soma "9" + "Z"', () => {
    function test_soma() {
        soma("9", "Z");
    }
    expect(test_soma).not.toBe("9Z");
    expect(test_soma).not.toBe(NaN);
    expect(test_soma).toThrow(Error);
    expect(test_soma).toThrow(/^a e b devem ser numeros!$/);
})


