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
        {part1}
        {exercises1}
      </Content>

      <p>
        Number of exercises{" "}
        {content[0].exercises + content[1].exercises + content[2].exercises}
      </p>
    </div>
  );
}

export default App;
