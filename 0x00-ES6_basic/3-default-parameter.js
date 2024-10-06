import getSumOfHoods from './3-default-parameter.js';

describe('getSumOfHoods', () => {
  test('should return correct sum with default values', () => {
    expect(getSumOfHoods(34)).toBe(142); // 34 + 89 + 19
  });

  test('should return correct sum with one custom value', () => {
    expect(getSumOfHoods(34, 3)).toBe(56); // 34 + 3 + 19
  });

  test('should return correct sum with two custom values', () => {
    expect(getSumOfHoods(34, 3, 4)).toBe(41); // 34 + 3 + 4
  });

  test('should return correct sum with only custom values', () => {
    expect(getSumOfHoods(0, 5, 10)).toBe(15); // 0 + 5 + 10
  });

  test('should handle negative numbers correctly', () => {
    expect(getSumOfHoods(-34, -10, -5)).toBe(-49); // -34 + -10 + -5
  });
});
