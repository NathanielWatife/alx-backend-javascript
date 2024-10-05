import taskBlock from './1-block-scoped.js';

describe('Test taskBlock function', () => {
  test('should return [false, true] when trueOrFalse is true', () => {
    const result = taskBlock(true);
    expect(result).toEqual([false, true]);
  });

  test('should return [false, true] when trueOrFalse is false', () => {
    const result = taskBlock(false);
    expect(result).toEqual([false, true]);
  });
});
