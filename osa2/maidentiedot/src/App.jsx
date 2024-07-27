import { useState } from "react";
import { useEffect } from "react";
import Filter from "./components/Filter";
import Display from "./components/Display";
import Notification from "./components/Notification";
import backend from "./service/backend";

function App() {
  const [countries, setCountries] = useState([]);
  const [newFilter, setFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [message, setMessage] = useState(null);
  const [weather, setWeather] = useState(null);

  // Fetch countries data just once, when it first runs
  useEffect(() => {
    backend
      .getAll()
      .then((countries) => setCountries(countries))
      .catch((error) => console.error(error));
  }, []);

  // Filter the list of countries based on the search input
  useEffect(() => {
    if (newFilter.trim() !== "") {
      const filtered = countries.filter((country) =>
        country.name.common
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(newFilter.replace(/\s/g, "").toLowerCase())
      );
      setFilteredCountries(filtered);
      setMessage(null);
      if (filtered.length > 10) {
        setMessage("Too many matches, specify another filter");
        setFilteredCountries([]);
      } else if (filtered.length === 1) {
        const capital = filtered[0].capital[0]; //
        backend
          .getOneWeather(capital)
          .then((weather) => setWeather(weather.list[0])) // Set the first weather record
          .catch((error) => console.error(error));
      }
    } else {
      setMessage(null);
      setWeather(null);
    }
  }, [newFilter]);

  // Handle changes in input fields
  const handleFilter = (event) => setFilter(event.target.value);

  // change filter with name of selected country to show it data
  const handleShow = (country) => setFilter(country);

  return (
    <div>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <Display
        filteredCountries={filteredCountries}
        handleShow={handleShow}
        weather={weather}
      />
      <Notification message={message} />
    </div>
  );
}

export default App;
