// 2-arrow.test.js
import getNeighborhoodsList from './2-arrow.js';

describe('Test getNeighborhoodsList class', () => {
  test('should add new neighborhoods correctly', () => {
    const neighborhoodsList = new getNeighborhoodsList();
    const initialList = ['SOMA', 'Union Square'];

    // Test if initial neighborhoods are correct
    expect(neighborhoodsList.sanFranciscoNeighborhoods).toEqual(initialList);

    // Add a new neighborhood and test the result
    const result = neighborhoodsList.addNeighborhood('Noe Valley');
    expect(result).toEqual([...initialList, 'Noe Valley']);

    // Add another neighborhood
    const result2 = neighborhoodsList.addNeighborhood('Mission District');
    expect(result2).toEqual([...initialList, 'Noe Valley', 'Mission District']);
  });
});
