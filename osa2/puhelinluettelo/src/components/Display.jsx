const Display = ({ name, number, remove }) => (
  <p>
    {name} {number} <button onClick={remove}>delete</button>
  </p>
);

export default Display;
