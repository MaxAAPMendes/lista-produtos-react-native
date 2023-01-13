import axios from "axios";

export function config() {

  const token = localStorage.getItem('tokenSalvoUser');
  const rest = axios.create({
    baseURL: 'https://fiap-reactjs-presencial.herokuapp.com/',
    timeout: 5000,
    // headers: {'Authorization': token}
  });
  rest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return {
    rest,
  }
}