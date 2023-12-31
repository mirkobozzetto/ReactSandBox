import { useState } from "react";

interface CounterProps {
  check: string;
}

const Counter = ({ check }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hey {check}</h1>
      {count < 4 ? <h1>Counter is to low</h1> : <h1>Counter is high</h1>}
      <h1>{count}</h1>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
};

export default Counter;
