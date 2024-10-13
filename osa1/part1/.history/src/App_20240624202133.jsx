import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const friends = [
    { name: "Levi", age: 4 },
    { name: "Venla", age: 10 },
  ];
  return (
    <>
      <p>
        {friends[0].name} and age {friends[0].age}
      </p>
      <p>
        {friends[1].name} and age {friends[1].age}
      </p>
    </>
  );
};

export default App;
