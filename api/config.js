import * as axios from "axios";

// https://fiap-reactjs-presencial.herokuapp.com/storeProducts/signup
export function config() {

  const rest = axios.create({
    baseUrl: 'https://fiap-reactjs-presencial.herokuapp.com/',
    timeout: 2000,
  })

  return {
    rest,
  }
}