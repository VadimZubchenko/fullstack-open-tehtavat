import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header name={name} />
      <div>
        {parts.map((part) => (
          <Content key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
      <Total parts={parts} />
    </div>
  );
};

export default Course;
