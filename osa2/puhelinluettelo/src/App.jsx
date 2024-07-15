import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");

  //get data from db.json using json-server
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);
  console.log("persons: ", persons.length);

  // is triggered when button is clicked
  const addNewPerson = (event) => {
    event.preventDefault();

    //normalize the name to string to lower case without spaces
    const normalizedNewName = newName.replace(/\s/g, "").toLowerCase();

    //find the same name in array
    const dublicate = (person) =>
      person.name.replace(/\s/g, "").toLowerCase() === normalizedNewName;

    //method 'some' returns true when the dublicate is found
    const isDuplicate = persons.some(dublicate);

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
