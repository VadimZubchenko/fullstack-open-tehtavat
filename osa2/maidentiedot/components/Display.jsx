const Display = ({ filteredCountries }) => {
  if (filteredCountries.length === 1) {
    return (
      <>
        {filteredCountries.map((country) => (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
              {Object.values(country.languages).map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              width="100"
            />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {filteredCountries.map((p) => (
        <p key={p.name.common}>{p.name.common}</p>
      ))}
    </>
  );
};

export default Display;
