import Display from "./Display";

const Person = ({ filteredPersons, remove }) => {
  return filteredPersons.map((person) => {
    return (
      <Display
        key={person.id}
        name={person.name}
        number={person.number}
        remove={() => remove(person)}
      />
    );
  });
};

export default Person;
