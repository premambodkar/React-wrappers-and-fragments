import React from 'react';
import './style.css';
import Child from './Child.js';

export default function App() {
  return [
    <h1>Hello React Wrappers and Fragments!</h1>,
    <p>Short Demo for understanding the concepts</p>,
    <div>This compoent returns data from simple array</div>,
    <Child />,
  ];
}
