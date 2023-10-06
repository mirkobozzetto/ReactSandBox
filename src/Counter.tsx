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
      {count < 4 ? <h1>{check}</h1> : null}
      <h1>{count}</h1>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
};

export default Counter;
