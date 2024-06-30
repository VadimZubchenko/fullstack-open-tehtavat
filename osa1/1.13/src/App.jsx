import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

//create array of anecdote votes
const votes = new Array(8).fill(0);

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
  const [vote, setVote] = useState(votes);

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

  const handleVote = (selected) => {
    const handle = () => {
      let temp = {
        ...vote,
        [selected]: (vote[selected] += 1),
      };

      console.log(selected, " votes: ", vote[selected]);
      setVote(temp);
      console.log("state vote: ", vote);
    };

    return handle;
  };

  return (
    <>
      <Display anecdote={anecdotes[selected]} />
      <Button handleClick={handleVote(selected)} name={"Vote"} />
      <Button handleClick={handleSelector} name={"Next andecdote"} />
    </>
  );
};

export default App;
