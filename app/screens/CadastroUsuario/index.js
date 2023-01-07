import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from '@rneui/themed';
import { Input, Button } from 'react-native-elements';
import { ModelUsuario } from '../../models/usuario';
import Schemas from '../../schemas';
import { MensagemValidacaoInput } from '../../utils/MensagemValidacaoInput';


const estiloComponente = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#2673b3",
    margin: "20px"
  },
});

function CadastroUsuario() {
  const {
    container,
    titulo,
  } = estiloComponente;
  const schemaCadastro = Schemas.schemaCadastroUsuario();
  const dadosInputCadastro = ModelUsuario.inputsDoUsuario();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgAlerta, setMsgAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState(false);
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
    const dadosCadastro = { nome, telefone, email, senha }
    schemaCadastro.isValid(dadosCadastro)
      .then((valido) => {
        setTipoAlerta(valido);
        if (valido) {
          // chamar método post para cadastrar usuário
          console.log("chamar método post para cadastrar usuário");
        }
      });
    schemaCadastro.validate(dadosCadastro)
      .then(() => setMsgAlerta("Dados válidos para cadastro"))
      .catch((err) => {
        const erro = err.errors[0] || ""; 
        setMsgAlerta(erro);
      });
  }
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Dados do novo Usuário
      </Text>
      {
        Object.keys(dadosInputCadastro).map((item) => (
          <Input
            name={dadosInputCadastro[item].nome}
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
      <View>
        <MensagemValidacaoInput tipoAlerta={tipoAlerta} msgAlerta={msgAlerta} />
      </View>
      <View>
        <Button
          title="CADASTRAR"
          onPress={cadastrar}
        />
      </View>
    </View>
  )
}

export default CadastroUsuario;