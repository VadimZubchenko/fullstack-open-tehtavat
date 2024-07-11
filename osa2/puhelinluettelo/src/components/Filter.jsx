const Filter = ({ newFilter, handleFilter }) => (
  <div>
    shown with: <input value={newFilter} onChange={handleFilter} />
  </div>
);

export default Filter;
