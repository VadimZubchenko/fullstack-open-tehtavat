import Part from "./Part";

const Content = ({ name, exercises }) => {
  return (
    <div>
      <Part name={name} exercises={exercises} />
    </div>
  );
};

export default Content;
