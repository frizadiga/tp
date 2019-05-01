import { denominator } from './formula';

describe('functional denominator', () => {
  it('denominator(15000) should return output correctly', () => {
    const result = denominator(15000);
    const expected = [
      {
        count: 1,
        amount: 10000,
      }, {
        count: 1,
        amount: 5000,
      },
    ];
    expect(result).toEqual(expected);
  });
});
