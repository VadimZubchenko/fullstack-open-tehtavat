import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import { useEffect } from "react";
import backend from "./service/backend";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  // GET data from db.json using json-server
  useEffect(() => {
    backend.getAll().then((persons) => setPersons(persons));
  }, []);

  // Handle form submission for adding a new person
  const addNewPerson = (event) => {
    event.preventDefault();

    // Transform input name to string of lower case without spaces
    const normalizedNewName = newName.replace(/\s/g, "").toLowerCase();

    // the same name in array
    const dublicate = (person) =>
      person.name.replace(/\s/g, "").toLowerCase() === normalizedNewName;

    // If the dublicate is found, it returns true
    const isDuplicate = persons.some(dublicate);

    // Check is there the same name in db
    if (isDuplicate) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
      // Replace the tel. number with new one
      if (confirmUpdate) {
        // Find updatable person
        const personToUpdate = persons.find(dublicate);

        // Create object with updated tel.
        const updatedPerson = { ...personToUpdate, number: newPhone };

        backend
          .update(updatedPerson.id, updatedPerson)
          .then((returnedPerson) => {
            // Render list of updated persons to screen
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setErrorMsg(`${returnedPerson.name}'s number has been updated.`);
            setTimeout(() => {
              setErrorMsg(null);
            }, 3000);
          });
      }
    } else {
      // Create new person object
      const newPerson = { name: newName, number: newPhone };

      backend.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson)); //render new note to screen
        setErrorMsg(`${returnedPerson.name} has been added.`);
        setTimeout(() => {
          setErrorMsg(null);
        }, 3000);
      });
    }

    setNewName("");
    setNewPhone("");
  };

  // Handle changes in input fields
  const handleChangeName = (event) => setNewName(event.target.value);
  const handleChangePhone = (event) => setNewPhone(event.target.value);
  const handleFilter = (event) => setFilter(event.target.value);

  // Filter the list of persons based on the search input
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  // Handle removing a person
  const remove = (person) => {
    if (window.confirm(`Remove ${person.name}?`)) {
      backend.remove(person.id).then((deletedPerson) => {
        setPersons(persons.filter((p) => p.id !== deletedPerson.id));
        setErrorMsg(`${deletedPerson.name} has been removed`);
        setTimeout(() => {
          setErrorMsg(null);
        }, 3000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMsg} />
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
      <Person filteredPersons={filteredPersons} remove={remove} />
    </div>
  );
};

export default App;
