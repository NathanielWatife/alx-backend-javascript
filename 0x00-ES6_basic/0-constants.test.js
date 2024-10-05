// 0-constants.test.js
import { taskFirst, taskNext } from './0-constants';

describe('Test taskFirst and taskNext functions', () => {
  test('taskFirst should return the correct string', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
  });

  test('taskNext should return the correct combination string', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
  });
});
