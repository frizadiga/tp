import validator from './validator';

describe('validator() test valid value', () => {
  it('validator(15000) should return output correctly', () => {
    const result = validator('15000');
    const expected = {
      value: 15000,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('validator(18.215) should return output correctly', () => {
    const result = validator('18.215');
    const expected = {
      value: 18215,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('validator(Rp17500) should return output correctly', () => {
    const result = validator('Rp17500');
    const expected = {
      value: 17500,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('validator(Rp17.500,00) should return output correctly', () => {
    const result = validator('Rp17.500,00');
    const expected = {
      value: 17500,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('validator(Rp 120.325) should return output correctly', () => {
    const result = validator('Rp 120.325');
    const expected = {
      value: 120325,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('validator(005.000) should return output correctly', () => {
    const result = validator('005.000');
    const expected = {
      value: 5000,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('validator(001000) should return output correctly', () => {
    const result = validator('001000');
    const expected = {
      value: 1000,
      error: '',
    };
    expect(result).toEqual(expected);
  });
});

describe('validator() test invalid value', () => {
  it('validator(17,500) should return error correctly', () => {
    const result = validator('17,500');
    const expected = {
      value: null,
      error: 'invalid separator',
    };
    expect(result).toEqual(expected);
  });

  it('validator(2 500) should return error correctly', () => {
    const result = validator('2 500');
    const expected = {
      value: null,
      error: 'invalid separator',
    };
    expect(result).toEqual(expected);
  });

  it('validator(3000 Rp) should return error correctly', () => {
    const result = validator('3000 Rp');
    const expected = {
      value: null,
      error: 'valid character in wrong position',
    };
    expect(result).toEqual(expected);
  });

  it('validator(Rp) should return error correctly', () => {
    const result = validator('Rp');
    const expected = {
      value: null,
      error: 'missing value',
    };
    expect(result).toEqual(expected);
  });
});
