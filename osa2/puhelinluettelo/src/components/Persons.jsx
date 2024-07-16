import Display from "./Display";

const Person = ({ filteredPersons, delPerson }) => {
  return filteredPersons.map((person) => {
    return (
      <Display
        key={person.id}
        name={person.name}
        number={person.number}
        delPerson={() => delPerson(person)}
      />
    );
  });
};

export default Person;
