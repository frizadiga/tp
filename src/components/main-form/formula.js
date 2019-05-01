export const denominator = (input) => {
  let total = input;
  const nominals = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
  const result = [];

  for (let i = 0, len = nominals.length; i < len; i += 1) {
    const count = parseInt(total / nominals[i], 10);

    if (count > 0) {
      result.push({
        count,
        amount: nominals[i],
      });
    }

    total %= nominals[i];
  }

  if (total > 0) {
    result.left = total;
  }

  return result;
};
