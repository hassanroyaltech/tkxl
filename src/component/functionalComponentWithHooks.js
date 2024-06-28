import React, { useState } from 'react';

const CounterFuntional = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>CounterFuntional: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default CounterFuntional;
