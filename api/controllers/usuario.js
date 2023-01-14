import { config } from '../config';

export class Usuario {
  async logar(body) {
    const { rest } = config();
    try {
      const logado = await rest.post('storeProducts/login', body);
      return logado;
    } catch (error) {
      return error;
    }
  }

  async cadastrarUsuario(body) {
    const { rest } = config();
    try {
      // https://fiap-reactjs-presencial.herokuapp.com/
      const usuario = await rest.put('storeProducts/signup', body);
      return {
        status: "sucesso",
        statusCode: 200,
        mensagem: "Usuário cadastrado com sucesso",
        data: usuario
      };
    } catch (error) {
      const { response } = error;
      const { status, data } = response;
      const mensagem = data.data[0].msg || error.message;
      return {
        status: "erro",
        statusCode: status,
        mensagem,
        data
      };
    }
  }
}

const controllerUsuario = new Usuario();
export default controllerUsuario;