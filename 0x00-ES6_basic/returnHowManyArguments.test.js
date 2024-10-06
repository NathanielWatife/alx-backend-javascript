import returnHowManyArguments from './4-rest-parameter.js';

describe('returnHowManyArguments', () => {
  test('should return 1 when one argument is passed', () => {
    expect(returnHowManyArguments("one")).toBe(1);
  });

  test('should return 4 when four arguments are passed', () => {
    expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
  });

  test('should return 0 when no arguments are passed', () => {
    expect(returnHowManyArguments()).toBe(0);
  });

  test('should return 2 when two arguments are passed', () => {
    expect(returnHowManyArguments("Hello", "World")).toBe(2);
  });

  test('should return 3 when mixed argument types are passed', () => {
    expect(returnHowManyArguments("Hello", 2020, true)).toBe(3);
  });

  test('should return 5 when five arguments are passed', () => {
    expect(returnHowManyArguments("a", "b", "c", "d", "e")).toBe(5);
  });
});
