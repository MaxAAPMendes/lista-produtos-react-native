import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from '@rneui/themed';
import { Input, Button } from 'react-native-elements';
const estiloComponente = StyleSheet.create({
  container: {
    background: "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

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

function CadastroUsuario() {
  const {
    container,
  } = estiloComponente;
  // Tela com nome, telefone, e-mail e senha para cadastrar o usuário
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const capturarInput = (item, value) => {
    switch (item) {
      case "nome":
        setNome(value);
        break;
      case "telefone":
        setTelefone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "senha":
        setSenha(value);
        break; 
      default:
        break;
    }
  }
  const cadastrar = () => {
    console.log("cadastrar");
    console.log(nome);
    // chamar método post para cadastrar usuário
  }
  return (
    <View style={container}>
      <Text h3>
        Cadastrar Usuário
      </Text>
      <View>
        {
          Object.keys(dadosInputCadastro).map((item) => (
            <Input
              placeholder={dadosInputCadastro[item].rotulo}
              errorStyle={{ color: 'red' }}
              keyboardType={dadosInputCadastro[item].keyboardType}
              // label="Senha"
              secureTextEntry={dadosInputCadastro[item].nome === "senha"}
              key={dadosInputCadastro[item].nome}
              onChangeText={(value) => capturarInput(dadosInputCadastro[item].nome, value)}
            />
          ))
        }
        <Button
          title="CADASTRAR"
          onPress={cadastrar}
        />
      </View>
    </View>
  )
}

export default CadastroUsuario;