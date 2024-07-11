import Display from "./Display";

const Person = ({ filteredPersons }) => {
  return filteredPersons.map((person) => (
    <Display key={person.name} name={person.name} number={person.number} />
  ));
};

export default Person;
