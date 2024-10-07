import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header>{course}</Header>
      <Content>
        part1 = {{ part: part1, exercises: exercises1 }}
        part2 = {{ part: part2, exercises: exercises2 }}
        part3 = {{ part: part3, exercises: exercises3 }}
        {exercises3}
      </Content>

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
