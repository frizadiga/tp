import React, { useState } from 'react';
import './main-form.scss';
import { denominator } from './formula';
import Button from '../button';

const MainForm = () => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = denominator(inputValue);
    setResult(result);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
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
        <div className="result">
          <p style={{ margin: 0, fontWeight: 700 }}>Result: </p>
          {
            !!result.length && result.map(item => (
              <div>
                <span>{item.count}</span>
                <span> X </span>
                <span>{item.amount}</span>
              </div>
            ))
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
