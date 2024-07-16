const Display = ({ name, number, delPerson }) => (
  <p>
    {name} {number}
    <button onClick={delPerson}>delete</button>
  </p>
);

export default Display;
