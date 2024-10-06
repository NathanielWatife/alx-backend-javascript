import appendToEachArrayValue from './10-loops.js';

describe('appendToEachArrayValue', () => {
  test('should append a string to each value in the array', () => {
    const result = appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-');
    expect(result).toEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
  });

  test('should return an empty array when input is empty', () => {
    const result = appendToEachArrayValue([], 'test-');
    expect(result).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = ['appended', 'fixed', 'displayed'];
    appendToEachArrayValue(originalArray, 'correctly-');
    expect(originalArray).toEqual(['appended', 'fixed', 'displayed']);
  });
});
