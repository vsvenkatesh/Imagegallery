import React from 'react';
import ReactDOM from 'react-dom';
import first from './first';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

