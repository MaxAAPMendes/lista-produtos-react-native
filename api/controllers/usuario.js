import { config } from '../config';

export class Usuario {
  
  async cadastrarUsuario(body) {
    const { rest } = config();
    console.log(rest)
    try {
      console.log("cadastrando novo usuário...");
      // https://fiap-reactjs-presencial.herokuapp.com/
      const usuario = await rest.put('storeProducts/signup', body);
      console.log('usuário cadastrado', usuario);
      const mensagem = usuario.message || "usuário cadastrado";
      return {
        usuario
      };
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
      const { response } = error;
      const { status, data } = response;
      const mensagem = data.data[0].msg || error.message;
      return {
        status,
        mensagem,
        data
      };
    }
  }
}

const controllerUsuario = new Usuario();
export default controllerUsuario;

/*
200
{
	"message": "User created successfully",
	"userId": "63bb2c041f11992431703b5b"
}

*/