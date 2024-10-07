import Part from "./components/Part";

const Content = (props) => {
  return (
    <div>
      <Part>props</Part>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

export default Content;
