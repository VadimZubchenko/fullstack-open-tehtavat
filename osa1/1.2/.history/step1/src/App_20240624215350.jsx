import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const course = "Half Stack application development";
  const content = [
    { part1: "Fundamentals of React", exercise1: 10 },
    { part2: "Using props to pass data", exercise2: 7 },
    { part3: "State of a component", exercise3: 14 },
  ];

  return (
    <div>
      <Header>{course}</Header>
      <Content>
        {[
          content[0].part1,
          content[0].exercise1,
          content[1].part2,
          content[1].exercise2,
          content[2].part3,
          content[2].exercise3,
        ]}
      </Content>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
