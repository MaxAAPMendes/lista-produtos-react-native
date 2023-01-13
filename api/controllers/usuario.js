import { config } from '../config';

export class Usuario {
  async logar(body) {
    const { rest } = config();
    try {
      const logado = await rest.post('storeProducts/login', body);
      console.log("usuário logado", logado);
      return logado;
    } catch (error) {
      console.log("Erro ao logar", error);
    }
  }

  async cadastrarUsuario(body) {
    const { rest } = config();
    try {
      console.log("cadastrando novo usuário...");
      // https://fiap-reactjs-presencial.herokuapp.com/
      const usuario = await rest.put('storeProducts/signup', body);
      console.log('usuário cadastrado', usuario);
      return {
        status: "sucesso",
        statusCode: 200,
        mensagem: "Usuário cadastrado com sucesso",
        data: usuario
      };
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
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