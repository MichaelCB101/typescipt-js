import { filterEven } from '../tasks/filterEven';

describe('filterEven', () => {
  it('should return only even numbers', () => {
    const result = filterEven([1, 2, 3, 4]);
    expect(result).toEqual([2, 4]);
  });
});
