export class ModelUsuario {

  constructor() {
    this.dadosUsuario = null;
  }

  static inputsDoUsuario() {
    const dadosInputCadastro = {
      nome: {
        nome: "nome",
        rotulo: "Nome",
        keyboardType: "default",
      },
      telefone: {
        nome: "telefone",
        rotulo: "Telefone",
        keyboardType: "phone-pad",
      },
      email: {
        nome: "email",
        rotulo: "E-mail",
        keyboardType: "",
      },
      senha: {
        nome: "senha",
        rotulo: "Senha",
        keyboardType: "default",
      },
    }
    return dadosInputCadastro;
  }

  getDadosusuario(dadosUsuario) {
    this.dadosUsuario = dadosUsuario;
  }

}

const modelUsuario = new ModelUsuario();
export default modelUsuario;
