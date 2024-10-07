import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1} exercises1={props.exercises1} />
    </div>
  );
};

export default Content;
