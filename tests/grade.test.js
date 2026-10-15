const { calculateGrade } = require('../src/grade');

describe('Grade Calculator (boundary value analysis)', () => {
  test.each([
    [100, 'A'],
    [90, 'A'],
    [89, 'B'],
    [80, 'B'],
    [79, 'C'],
    [70, 'C'],
    [69, 'D'],
    [60, 'D'],
    [59, 'E'],
    [0, 'E'],
  ])('skor %i menghasilkan grade %s', (score, expected) => {
    expect(calculateGrade(score)).toBe(expected);
  });

  test.each([-1, 101])('skor di luar rentang (%i) melempar error', (score) => {
    expect(() => calculateGrade(score)).toThrow('Score must be 0-100');
  });

  test('input bukan angka melempar error', () => {
    expect(() => calculateGrade('90')).toThrow('Score must be 0-100');
    expect(() => calculateGrade(NaN)).toThrow('Score must be 0-100');
  });
});
