const Display = ({ filteredCountries, handleShow, weather }) => {
  if (filteredCountries.length === 1) {
    const temperatureCelsius = weather
      ? (weather.main.temp - 273.15).toFixed(2)
      : null;
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
            <h2>{`Weather in ${country.capital}`}</h2>

            {weather ? (
              <div>
                <p>{`Temperature ${temperatureCelsius}° Celsius`}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={`Description: ${weather.weather[0].description}`}
                />
                <p>{`wind ${weather.wind.speed} m/s`}</p>
              </div>
            ) : (
              <p>Loading weather...</p>
            )}
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {filteredCountries.map((p) => (
        <p key={p.name.common}>
          {p.name.common}{" "}
          <button onClick={() => handleShow(p.name.common)}>show</button>
        </p>
      ))}
    </>
  );
};

export default Display;
