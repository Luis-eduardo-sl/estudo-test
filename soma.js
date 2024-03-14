function soma(a, b) {
    let result = Number(a) + Number(b);

    if (isNaN(result)) {
        throw new Error('a e b devem ser numeros!');
    }
    return result;

};

module.exports = soma;