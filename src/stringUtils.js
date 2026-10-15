function reverse(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

function countVowels(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

module.exports = { reverse, isPalindrome, countVowels };
