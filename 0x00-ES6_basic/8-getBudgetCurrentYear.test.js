import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

describe('getBudgetForCurrentYear', () => {
  test('should return an object with income, gdp, and capita for the current year', () => {
    const currentYear = new Date().getFullYear();
    const expectedBudget = {
      [`income-${currentYear}`]: 2100,
      [`gdp-${currentYear}`]: 5200,
      [`capita-${currentYear}`]: 1090,
    };

    expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual(expectedBudget);
  });
});
