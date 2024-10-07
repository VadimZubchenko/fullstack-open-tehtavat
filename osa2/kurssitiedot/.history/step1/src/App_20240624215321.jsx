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
          content[0].part,
          content[0].exercise,
          content[1].part,
          content[1].exercise,
          content[2].part,
          content[2].exercise,
        ]}
      </Content>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
