import math from 'calculations/math';

describe('calculate', function () {
  it('add', function () {
    const result = math.add(1)(2);
    expect(result).toBe(3);
  });
  it('subtract', function () {
    const result = math.subtract(1)(2);
    expect(result).toBe(-1);
  });
});
