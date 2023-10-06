import Counter from "./Counter";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState<string>("I'm a text");
  const updateTextHandler = () => {
    setText("Updated");
  };
  //
  const [check, setCheck] = useState<string>("click more !");

  return (
    <div className="App">
      <br />
      <h1>{text}</h1>
      <button onClick={updateTextHandler}>update me</button>
      <br />

      <Counter check={check} />
    </div>
  );
};

export default App;
