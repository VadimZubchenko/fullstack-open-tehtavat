import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("rendering with counter value", count);

  const increase = () => {
    console.log("increasing, value before", count);
    setCount(count + 1);
  };
  const decrease = () => {
    console.log("decreasing, value before", count);
    setCount(count - 1);
  };

  const reset = () => {
    console.log("resetting to zero, value before", count);
    setCount(0);
  };

  return (
    <>
      <div>
        <Display count={count} />
      </div>
      <Button handleClick={increase} text="plus" />
      <Button handleClick={decrease} text="minus" />
      <Button handleClick={reset} text="reset" />
    </>
  );
};

export default App;
