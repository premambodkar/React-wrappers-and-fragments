import React from 'react';
import './style.css';
import Child from './Child.js';

export default function App() {
  return [
    <h1>Hello StackBlitz!</h1>,
    <p>Start editing to see some magic happen :)</p>,
    <Child />,
  ];
}
