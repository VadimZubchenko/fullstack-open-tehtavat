import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part>{props.part1}</Part>
      <Part>props</Part>
      <Part>props</Part>
    </div>
  );
};

export default Content;
