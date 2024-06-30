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
    const gd = good + 1;
    const tot = total + 1;
    const percPos = (gd / tot) * 100;
    const avg = (gd - bad) / tot;
    setGood(gd);
    setTotal(tot);
    setAverage(avg);
    setPositive(percPos);
  };
  const neutralFeedback = () => {
    const neut = neutral + 1;
    const tot = total + 1;
    const avg = (good - bad) / tot;
    const percPos = (good / tot) * 100;
    setNeutral(neut);
    setTotal(tot);
    setAverage(avg);
    setPositive(percPos);
  };
  const badFeedback = () => {
    const bd = bad + 1;
    const tot = total + 1;
    const avg = (good - bd) / tot;
    const percPos = (good / tot) * 100;
    setBad(bd);
    setTotal(tot);
    setAverage(avg);
    setPositive(percPos);
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
        <table>
          <tbody>
            <StatisticLine text="good" result={good} />
            <StatisticLine text="neutral" result={neutral} />
            <StatisticLine text="bad" result={bad} />
            <StatisticLine text="all" result={total} />
            <Statistic text="average" result={average} />
            <Statistic text="positive" result={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
