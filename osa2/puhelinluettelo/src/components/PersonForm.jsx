const PersonForm = ({
  addNewPerson,
  newName,
  handleChangeName,
  newPhone,
  handleChangePhone,
}) => {
  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        phone: <input value={newPhone} onChange={handleChangePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
