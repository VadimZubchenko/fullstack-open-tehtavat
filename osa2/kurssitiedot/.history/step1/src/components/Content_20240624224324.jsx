const Content = (props) => {
  <div>
    <p>
      {props.part1.part1} {props.exercises1.exercises1}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </div>;
};

export default Content;