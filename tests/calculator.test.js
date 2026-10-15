const Calculator = require('../src/calculator');

describe('Calculator Unit Tests', () => {
       test('test sengaja gagal', () => {
       expect(2 + 2).toBe(5);
     });
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('5 + 3 = 8', () => {
      expect(calc.add(5, 3)).toBe(8);
    });
    test('bilangan negatif', () => {
      expect(calc.add(-5, -3)).toBe(-8);
    });
    test('nol', () => {
      expect(calc.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('5 - 3 = 2', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });
    test('hasil negatif', () => {
      expect(calc.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('5 * 3 = 15', () => {
      expect(calc.multiply(5, 3)).toBe(15);
    });
    test('dikali nol menghasilkan nol', () => {
      expect(calc.multiply(7, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('20 / 4 = 5', () => {
      expect(calc.divide(20, 4)).toBe(5);
    });
    test('pembagian desimal', () => {
      expect(calc.divide(1, 4)).toBe(0.25);
    });
    test('pembagian dengan nol menghasilkan error', () => {
      expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('isEven', () => {
    test('4 genap', () => {
      expect(calc.isEven(4)).toBe(true);
    });
    test('5 ganjil', () => {
      expect(calc.isEven(5)).toBe(false);
    });
  });
});
