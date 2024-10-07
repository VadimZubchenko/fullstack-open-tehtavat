import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";

function App() {
  const course = "Half Stack application development";
  const content = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
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
