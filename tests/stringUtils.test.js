const { reverse, isPalindrome, countVowels } = require('../src/stringUtils');

describe('stringUtils', () => {
  test('reverse membalik string', () => {
    expect(reverse('abc')).toBe('cba');
  });

  test('reverse string kosong', () => {
    expect(reverse('')).toBe('');
  });

  test('isPalindrome true untuk "Katak"', () => {
    expect(isPalindrome('Katak')).toBe(true);
  });

  test('isPalindrome mengabaikan spasi dan tanda baca', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('isPalindrome false untuk "hello"', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('countVowels menghitung huruf vokal', () => {
    expect(countVowels('Software Quality')).toBe(6);
  });

  test('countVowels tanpa vokal menghasilkan 0', () => {
    expect(countVowels('rhythm')).toBe(0);
  });

  test.each([reverse, isPalindrome, countVowels])(
    'input non-string melempar TypeError (%p)',
    (fn) => {
      expect(() => fn(123)).toThrow(TypeError);
    }
  );
});
