import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
  // return request.then((response) => {
  //   return response.data;
  // });
};

const create = (newNote) => {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => {
    return response.data;
  });
};

const update = (id, newNote) => {
  const request = axios.put(`${baseUrl}/${id}`, newNote);
  return request.then((response) => {
    return response.data;
  });
};

export default { getAll, create, update };
