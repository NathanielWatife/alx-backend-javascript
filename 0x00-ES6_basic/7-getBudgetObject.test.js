import getBudgetObject from './7-getBudgetObject.js';

describe('getBudgetObject', () => {
  test('should return an object with income, gdp, and capita', () => {
    const expectedBudget = {
      income: 400,
      gdp: 700,
      capita: 900,
    };

    expect(getBudgetObject(400, 700, 900)).toEqual(expectedBudget);
  });

  test('should handle negative values', () => {
    const expectedBudget = {
      income: -100,
      gdp: -200,
      capita: -300,
    };

    expect(getBudgetObject(-100, -200, -300)).toEqual(expectedBudget);
  });

  test('should handle zero values', () => {
    const expectedBudget = {
      income: 0,
      gdp: 0,
      capita: 0,
    };

    expect(getBudgetObject(0, 0, 0)).toEqual(expectedBudget);
  });
});
