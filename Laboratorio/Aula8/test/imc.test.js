const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80;
        const altura = 180;

        const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMEsperado);
    });



    it('altura = 0, entrada inadequada', () => {
        const peso = 70;
        const altura = 0;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

    it('peso = 0 para teste com peso = 20', () => {
        const peso = 20;
        const altura = 10;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.not.equal('Peso NaN');
    });

    it('peso = 0', () => {
        const peso = 0;
        const altura = 10;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('Peso NaN');
    });
});