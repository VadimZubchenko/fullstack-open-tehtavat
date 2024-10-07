import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const course = "Half Stack application development";
  const content = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header>{course}</Header>
      <Content>
        {content[0].part}
        {content[0].exercises}
      </Content>

      <p>
        Number of exercises{" "}
        {content[0].exercises + content[1].exercises + content[2].exercises}
      </p>
    </div>
  );
}

export default App;
