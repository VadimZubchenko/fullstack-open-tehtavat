import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  //generate integer number
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleSelector = () => {
    //get generated number between 0-7
    let next = getRandomInt(7);
    //be sure the next anecdote is different
    while (next === selected) {
      next = getRandomInt(7);
    }
    setSelected(next);
  };

  return (
    <>
      <Display anecdote={anecdotes[selected]} />
      <Button handleClick={handleSelector} name={"Next andecdote"} />
    </>
  );
};

export default App;
