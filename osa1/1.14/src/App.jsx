import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

//create arrays of 8 anecdotes votes
const points = new Array(8).fill(0);

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
  //state of the most popular anecdote
  const [pop, setPop] = useState(0);

  //generate integer number
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleSelector = () => {
    //get generated number for array index 0->7
    let next = getRandomInt(7);
    //be sure the next anecdote is different then presented
    while (next === selected) {
      next = getRandomInt(7);
    }
    setSelected(next);
  };

  const handleVote = (selected) => () => {
    points[selected] += 1;
    //find the most votes
    const most = Math.max(...points);
    //find index of the most votes
    const index = points.indexOf(most);
    setPop(index);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <Display anecdote={anecdotes[selected]} />
      <Button handleClick={handleVote(selected)} name={"Vote"} />
      <Button handleClick={handleSelector} name={"Next andecdote"} />
      <h2>Anecdote with the most notes</h2>
      <Display anecdote={anecdotes[pop]} />
    </>
  );
};

export default App;
