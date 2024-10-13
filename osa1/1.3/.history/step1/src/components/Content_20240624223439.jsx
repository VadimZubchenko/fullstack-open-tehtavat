const Content = (props) => {
  <>
    <p>
      {props.content[0].part} {props.content[0].exercises}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </>;
};

export default Content;
