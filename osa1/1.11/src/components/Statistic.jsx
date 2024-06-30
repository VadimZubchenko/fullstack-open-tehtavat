const Statistic = ({ text, result }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{result} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{result}</td>
    </tr>
  );
};

export default Statistic;
