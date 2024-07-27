import axios from "axios";
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`;
const api_key = import.meta.env.VITE_SOME_KEY;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    return response.data;
  });
};
const getOneWeather = (capital) => {
  const request = axios.get(
    `https://openweathermap.org/data/2.5/find?q=${capital}&appid=${api_key}&units=metric`
  );
  return request.then((response) => {
    return response.data;
  });
};
export default { getAll, getOneWeather };
