import Counter from "./Counter";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState<string>("I'm a text");
  const updateTextHandler = () => {
    setText("Updated");
  };
  return (
    <div className="App">
      <br />
      <h1>{text}</h1>
      <button onClick={updateTextHandler}>update me</button>
      <Counter />
    </div>
  );
};

export default App;
