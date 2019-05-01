import React, { useState } from 'react';
import { FontAwesomeIcon as FAS } from '@fortawesome/react-fontawesome';

import './main-form.scss';
import validator from './validator';
import { denominator } from './formula';

import Button from '../button';

const MainForm = () => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleReset = () => {
    setResult([]);
    setInputValue('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validValue = validator(inputValue);

    if (validValue.error) {
      setError(validValue.error);
    } else {
      const result = denominator(validValue.value);
      setResult(result);
      setInputValue(validValue.value.toLocaleString('id'));
    }
  };

  const handleInput = (e) => {
    setError('');
    setInputValue(e.target.value);
    setResult([]);
  };

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <input
          className="currency-input"
          type="text"
          placeholder="Type Ex: Rp 15.000"
          onChange={handleInput}
          value={inputValue}
          required
        />
        {
          error && <span className="error">{error}</span>
        }
        <div className="result">
          <p className="title">Result: </p>
          {
            !!result.length && result.map((item, i) => (
              <div key={i} className="item">
                <span className="count">{item.count}</span>
                <span className="times"> x </span>
                <span className="amount">Rp {item.amount}</span>
              </div>
            ))
          }
          {
            result.left
            && (
              <span>
                Left Rp <span className="amount">{result.left}</span> (no available fraction)
              </span>
            )
          }
        </div>
        <div className="action-bar">
          <Button
            type="submit"
            // to=""
            style={{
              color: '#42b549',
            }}
          >
            <FAS icon="check" />
            {' '}
            Calculate
          </Button>
          <Button
            onClick={handleReset}
            style={{
              color: '#ff5722',
            }}
          >
            <FAS icon="redo-alt" />
            {' '}
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MainForm;
