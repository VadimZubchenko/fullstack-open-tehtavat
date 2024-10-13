import axios from "axios";
const baseUrl = "/api/people";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    return response.data;
  });
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => {
    return response.data;
  });
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    return response.data;
  });
};

const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then((response) => {
    return response.data;
  });
};

export default { getAll, create, remove, update };
