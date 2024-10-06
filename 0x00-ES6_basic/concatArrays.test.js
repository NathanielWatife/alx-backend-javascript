import concatArrays from './5-spread-operator.js';

describe('concatArrays', () => {
  test('should concatenate two arrays and the characters of a string', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
  });

  test('should return only characters of a string if both arrays are empty', () => {
    expect(concatArrays([], [], 'Test')).toEqual(['T', 'e', 's', 't']);
  });

  test('should return the first array with characters of a string when the second array is empty', () => {
    expect(concatArrays(['x', 'y'], [], 'Z')).toEqual(['x', 'y', 'Z']);
  });

  test('should return the second array with characters of a string when the first array is empty', () => {
    expect(concatArrays([], ['m', 'n'], 'O')).toEqual(['m', 'n', 'O']);
  });

  test('should handle special characters in the string', () => {
    expect(concatArrays(['#'], ['@'], '!!')).toEqual(['#', '@', '!', '!']);
  });
});
