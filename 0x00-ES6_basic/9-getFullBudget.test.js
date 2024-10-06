import getFullBudgetObject from './9-getFullBudget.js';

describe('getFullBudgetObject', () => {
  test('should return an object with income, gdp, capita, and methods for currency conversion', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    
    expect(fullBudget.income).toBe(20);
    expect(fullBudget.gdp).toBe(50);
    expect(fullBudget.capita).toBe(10);
    expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
    expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
  });
});
