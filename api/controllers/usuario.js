import { config } from '../config';
import { Mensagem } from '../../app/utils/Mensagens';

export class Usuario {
  
  async cadastrarUsuario() {
    const { rest } = config();
    try {
      console.log("cadastrando novo usuário...");
      // https://fiap-reactjs-presencial.herokuapp.com/
      const usuario = await rest.put('storeProducts/signup', body);
      console.log('usuário cadastrado', usuario);
      <Mensagem
        texto="Usuário cadastrado com sucesso"
        tipoAlerta="sucesso"
      />
      return usuario;
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
      // Snackbar.show({
      //   text: "Erro ao cadastrar usuário",
      //   duration: Snackbar.LENGTH_SHORT,
      //   backgroundColor
      // })
      <Mensagem
        texto="Erro ao cadastrar usuário"
        tipoAlerta="erro"
      />
    }
  }
}

/*
200
{
	"message": "User created successfully",
	"userId": "63bb2c041f11992431703b5b"
}

*/