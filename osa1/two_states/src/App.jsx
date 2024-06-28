import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";
import "./App.css";

const App = () => {
  const [click, setClick] = useState({
    right: 0,
    left: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const rightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = click.right + 1;
    setClick({
      ...click,
      right: click.right + 1,
    });
    setTotal(updatedRight + click.left);
  };

  const leftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = click.left + 1;
    setClick({
      ...click,
      left: click.left + 1,
    });
    setTotal(updatedLeft + click.right);
  };
  //added by ChatGpt
  const resetClicks = () => {
    setClick({
      right: 0,
      left: 0,
    });
    setAll([]);
    setTotal(0);
  };

  return (
    <>
      <div className="button-container">
        <Display count={click.left} />
        <Button handleClick={leftClick} text="left" />
        <Button handleClick={resetClicks} text="reset" />
        <Button handleClick={rightClick} text="right" />
        <Display count={click.right} />
      </div>
      <div className="button-container">
        <p>{allClicks.join(" ")}</p>
      </div>
      <History allClicks={allClicks} />
      <p>{total}</p>
    </>
  );
};

export default App;
