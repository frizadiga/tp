export const denominator = (input) => {
  const nominals = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
  const result = [];
  let total = input;

  for (let i = 0, len = nominals.length; i < len; i += 1) {
    const count = parseInt(total / nominals[i], 10);

    if (count > 0) {
      result.push({
        count,
        amount: nominals[i],
      });

      total %= nominals[i];
    }
    // result += `${parseInt(total / nominals[i], 10)} x ${nominals[i]}, `;
  }

  // return JSON.stringify(result);
  return result;
};
