import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => {
    setGood(good + 1);
  };
  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const badFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button feedback={goodFeedback} name="good" />
      <Button feedback={neutralFeedback} name="neutral" />
      <Button feedback={badFeedback} name="bad" />
      <h1>Statistic</h1>
      <Display text="good" result={good} />
      <Display text="neutral" result={neutral} />
      <Display text="bad" result={bad} />
    </div>
  );
}

export default App;
