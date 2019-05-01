export default (str) => {
  str = str.trim();
  str = str.replace(/,00$/, '');
  let error = '';
  let result = {};

  if (!error && /^Rp([\D]|[ ])*$/i.test(str)) error = 'missing value';
  if (!error && /[\d ]+Rp\.?/i.test(str)) error = 'valid character in wrong position';
  if (!error && /[\d]+[, ]+[\d]+/.test(str)) error = 'invalid separator';
  if (!error && /^[A-Za-z]+$/.test(str)) error = 'please type number';

  if (error) {
    result = { value: null, error };
    return result;
  }

  const int = parseInt(str.replace(/[^\d]+/g, ''), 10);

  result = {
    value: int,
    error,
  };

  return result;
};
