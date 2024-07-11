import { useState } from "react";
import Note from "./components/Note";

function App({ notes }) {
  const [note, setNote] = useState(notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState();

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };
    setNote(notes.concat(noteObject));
    setNewNote("");
  };
  //target corresponds to the controlled input field
  //event.target.value refers to the value of the input field.
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "importent" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      {/*'value' makes the input field being controled  
        onChange is called whenever something happens in the input component. */}
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default App;
