import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { BrowserRouter as Router } from 'react-router-dom';
import MainForm from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><MainForm /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matches snapshot', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Router><MainForm /></Router>);
  expect(result).toMatchSnapshot();
});
