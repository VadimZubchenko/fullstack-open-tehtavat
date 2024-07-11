import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");

  // is triggered when button is clicked
  const addNewPerson = (event) => {
    event.preventDefault();

    //normalize the name to string to lower case without spaces
    const normalizedNewName = newName.replace(/\s/g, "").toLowerCase();

    //method 'some' returns true when a dublicate is found
    const isDuplicate = persons.some(
      (person) =>
        person.name.replace(/\s/g, "").toLowerCase() === normalizedNewName
    );

    isDuplicate
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat({ name: newName, number: newPhone }));

    //clear input field
    setNewName("");
    setNewPhone("");
  };

  // is triggered when any changes occur in the name input field
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  // is triggered when any changes occur in the phone input field
  const handleChangePhone = (event) => {
    setNewPhone(event.target.value);
  };
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  //limit the list of names by letter
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        addNewPerson={addNewPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        newPhone={newPhone}
        handleChangePhone={handleChangePhone}
      />
      <h2>Numbers</h2>
      <Person filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
