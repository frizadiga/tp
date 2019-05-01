export default (str) => {
  let error = '';
  str = str.trim();
  str = str.replace(/,00$/, '');

  if (!error && /[\d]+[, ]+[\d]+/.test(str)) error = 'invalid separator';
  if (!error && /[\d ]+Rp\.?/i.test(str)) error = 'valid character in wrong position';
  if (!error && /^Rp([^\d]|[ ])*$/i.test(str)) error = 'missing value';

  if (error) return { value: null, error };

  const int = parseInt(str.replace(/[^\d]+/g, ''), 10);

  return {
    value: int,
    error,
  };
};
