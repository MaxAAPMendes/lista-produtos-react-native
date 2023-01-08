import axios from "axios";

// https://fiap-reactjs-presencial.herokuapp.com/storeProducts/signup
export function config() {

  const rest = axios.create({
    baseURL: 'https://fiap-reactjs-presencial.herokuapp.com/',
    timeout: 5000,
  })

  return {
    rest,
  }
}