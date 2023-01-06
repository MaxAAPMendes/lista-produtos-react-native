import * as yup from "yup";

class Schemas {
  static schemaLogin() {
    const schema = yup.object().shape({
      email: yup.string()
        .email("E-mail não atende aos requisitos")
        .required("Campo e-mail é obrigatório"),
      senha: yup.string()
        .required("A senha é obrigatória")
        .min(8, "A senha deve conter 8 caracteres")
        .trim("Senha não pode ter espaço")
        // .lowercase('A senha deve conter uma letra minúscula')
        // .uppercase(1, 'A senha deve conter uma letra maiúscula')
        // .minNumbers(1, 'A senha deve conter pelo menos um número')
        // .minSymbols(1, 'A senha deve conter um caracter especial')
    })
    return schema;
  }

  static schemaCadastroUsuario() {
    const schema = yup.object().shape({
      nome: yup.string().required("Campo nome obrigatório"),
      telefone: yup.string()
        .required("Campo telefone é obrigatório"),
      email: yup.string()
      .email("E-mail não atende aos requisitos")
      .required("Campo e-mail é obrigatório"),
      senha: yup.string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve conter 8 caracteres")
      .trim("Senha não pode ter espaço")
    });

    return schema;
  }
}

export default Schemas;