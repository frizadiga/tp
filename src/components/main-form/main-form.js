import React, { useState } from 'react';
import './main-form.scss';
import validator from './validator';
import { denominator } from './formula';
import Button from '../button';

const MainForm = () => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

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
      {/* <p className="title"></p> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Amount Ex: Rp 15.000"
          onChange={handleInput}
          value={inputValue}
          required
        />
        {
          error && <span className="error">{error}</span>
        }
        <div className="result">
          <p style={{ margin: 0, fontWeight: 700 }}>Result: </p>
          {
            !!result.length && result.map((item, i) => (
              <div key={i}>
                <span>{item.count}</span>
                <span> X </span>
                <span>Rp {item.amount}</span>
              </div>
            ))
          }
          {
            result.left && <span>left Rp {result.left} (no available fraction)</span>
          }
        </div>
        <Button
          type="submit"
          // to=""
          style={{
            padding: 16,
            backgroundColor: '#42b549',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Calculate
        </Button>
      </form>
    </div>
  );
};

export default MainForm;
