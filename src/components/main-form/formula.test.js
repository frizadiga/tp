import { sum, multiply, primes, fibonacci } from './formula';

it('sum("1, 2, 3") return output correctly', () => {
  const result = sum('1, 2, 3, 4, 5');
  expect(result).toBe(15);
});

it('multiply("1, 2, 3, 4, 5") return output correctly', () => {
  const result = multiply('1, 2, 3, 4, 5');
  expect(result).toBe(120);
});

it('primes(5) return output correctly', () => {
  const result = primes(5);
  expect(result).toBe('2, 3, 5, 7, 11');
});

it('fibonacci(5) return output correctly', () => {
  const result = fibonacci(5);
  expect(result).toBe('0, 1, 1, 2, 3');
});
