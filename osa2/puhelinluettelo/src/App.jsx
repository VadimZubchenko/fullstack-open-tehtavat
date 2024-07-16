import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import { useEffect } from "react";
import backend from "./service/backend";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");

  //GET data from db.json using json-server
  useEffect(() => {
    backend.getAll().then((persons) => setPersons(persons));
  }, []);

  //POST new person
  const addNewPerson = (event) => {
    event.preventDefault();

    //normalize the name to string to lower case without spaces
    const normalizedNewName = newName.replace(/\s/g, "").toLowerCase();

    //to find the same name in array
    const dublicate = (person) =>
      person.name.replace(/\s/g, "").toLowerCase() === normalizedNewName;

    //method 'some' returns true when the dublicate is found
    const isDuplicate = persons.some(dublicate);

    const newObject = {
      name: newName,
      number: newPhone,
    };
    let res = false;
    isDuplicate
      ? (res = window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        ))
      : backend.create(newObject).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson)); //render new note to screen
        });

    // UPDATE tel. number
    if (res) {
      // find updatable person
      const updatedPerson = persons.find(dublicate);
      //create object with updated tel. number
      const updObject = {
        ...updatedPerson,
        number: newPhone,
      };

      backend.update(updObject.id, updObject).then((returnedPerson) => {
        //render list of updated persons to screen
        setPersons(
          persons.map((person) =>
            person.id !== returnedPerson.id ? person : returnedPerson
          )
        );
      });
    }
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
  //limit the list of names by letters
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const delPerson = (person) => {
    const result = window.confirm(`Remove ${person.name} ?`);
    if (result) {
      backend.remove(person.id).then((deletedPerson) => {
        setPersons(persons.filter((p) => p.id !== deletedPerson.id));
      });
    }
  };

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
      <Person filteredPersons={filteredPersons} delPerson={delPerson} />
    </div>
  );
};

export default App;
