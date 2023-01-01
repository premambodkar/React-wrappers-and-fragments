import React from 'react';
import Third from './Third.js';

const Second = (props) => {
  const someVar = `<> Content here... </>`;
  return (
    <>
      <div>Second</div>
      <div>Component</div>
      <div>This component using {someVar}</div>
      <Third />
    </>
  );
};
export default Second;
