import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Filter from "../components/Filter";
import Display from "../components/Display";
import Notification from "../components/Notification";

function App() {
  const [countries, setCountries] = useState([]);
  const [newFilter, setFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [message, setMessage] = useState();

  // Fetch countries data just once when it first runs
  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Filter the list of countries based on the search input
  useEffect(() => {
    if (newFilter !== "") {
      // set state of filtered country is async. so use variable for checking array length later.
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      );
      setFilteredCountries(filtered);

      // filteredCountries.length is '0', because state value hasn't yet been changed till next render
      // in other words, it's empty, although is used setFilterCountries(filtered) above.
      if (filtered.length > 10) {
        setMessage("Too many matches, specify another filter");
        setFilteredCountries([]);
      } else {
        setMessage(null);
      }
    } else {
      setFilteredCountries([]);
      setMessage(null);
    }
  }, [newFilter]);

  // Handle changes in input fields
  const handleFilter = (event) => setFilter(event.target.value);

  return (
    <div>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <Display filteredCountries={filteredCountries} />
      <Notification message={message} />
    </div>
  );
}

export default App;
