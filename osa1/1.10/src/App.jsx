import { useState } from "react";
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";
import Statistic from "./components/Statistic";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0.0);
  const [positive, setPositive] = useState(0.0);

  const goodFeedback = () => {
    const pos = good + 1;
    const tot = total + 1;
    const partPos = (pos / tot) * 100.0;
    const avg = (pos - bad) / tot;
    setGood(pos);
    setTotal(tot);
    setAverage(avg);
    setPositive(partPos);
  };
  const neutralFeedback = () => {
    const neut = neutral + 1;
    const tot = total + 1;
    const avg = (good - bad) / tot;
    const partPos = (good / tot) * 100.0;
    setNeutral(neut);
    setTotal(tot);
    setAverage(avg);
    setPositive(partPos);
  };
  const badFeedback = () => {
    const bd = bad + 1;
    const tot = total + 1;
    const avg = (good - bd) / tot;
    const partPos = (good / tot) * 100.0;
    setBad(bd);
    setTotal(tot);
    setAverage(avg);
    setPositive(partPos);
  };

  return (
    <div>
      <h2>give Feedback</h2>
      <Button feedback={goodFeedback} name="good" />
      <Button feedback={neutralFeedback} name="neutral" />
      <Button feedback={badFeedback} name="bad" />
      <h2>statistic</h2>
      {/* Conditinal with ternary operator 'condition ? exprIfTrue : exprIfFalse' */}
      {good === 0 &&
      neutral === 0 &&
      bad === 0 &&
      total === 0 &&
      average === 0 &&
      positive === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text="good" result={good} />
          <StatisticLine text="neutral" result={neutral} />
          <StatisticLine text="bad" result={bad} />
          <StatisticLine text="all" result={total} />
          <Statistic text="average" result={average} />
          <Statistic text="positive" result={positive} />
        </>
      )}
    </div>
  );
}

export default App;
