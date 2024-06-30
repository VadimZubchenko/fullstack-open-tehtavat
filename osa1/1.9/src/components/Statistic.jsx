const Statistic = ({ text, result }) => {
  if (text === "positive") {
    return (
      <p>
        {text} {result} %
      </p>
    );
  }
  return (
    <p>
      {text} {result}
    </p>
  );
};

export default Statistic;
