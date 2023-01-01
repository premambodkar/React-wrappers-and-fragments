import React from 'react';
import Wrapper from './Wrapper.js';
import Second from './Second.js';

const Child = (props) => {
  return (
    <Wrapper>
      <div>Hi</div>
      <div>How are you?</div>
      <Second />
    </Wrapper>
  );
};

export default Child;
