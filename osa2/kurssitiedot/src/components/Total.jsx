const Total = ({ parts }) => {
  //calculate sum of all courses with reduce method
  const total = parts.reduce((sum, current) => sum + current.exercises, 0);

  return (
    <>
      <b>total of {total} exercises</b>
    </>
  );
};

export default Total;
