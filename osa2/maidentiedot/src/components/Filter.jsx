const Filter = ({ newFilter, handleFilter }) => (
  <div>
    find countries: <input value={newFilter} onChange={handleFilter} />
  </div>
);

export default Filter;
