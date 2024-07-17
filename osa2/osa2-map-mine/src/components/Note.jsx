const Note = ({ note, toggleImportant }) => {
  const label = note.important ? "make no important" : "make important";

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportant}>{label}</button>
    </li>
  );
};

export default Note;
