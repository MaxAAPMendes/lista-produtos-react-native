import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from '@rneui/themed';
import { Input, Button } from 'react-native-elements';
import { ModelUsuario } from '../../models/usuario';
import Schemas from '../../schemas';
import { MensagemValidacaoInput } from '../../utils/componentes/MensagemValidacaoInput';
import controllerUsuario from '../../../api/controllers/usuario';
import { BotaoAcao } from '../../utils/componentes/BotaoAcao';


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
  const [tipoAlerta, setTipoAlerta] = useState("");
  const [spinner, setSpinner] = useState(false);
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
    const dadosCadastro = { nome, telefone, email, senha }
    schemaCadastro.isValid(dadosCadastro)
      .then(async (valido) => {
        if (valido) {
          // chamar método post para cadastrar usuário
          const body = {
            name: nome,
            phone: telefone,
            email,
            password: senha
          }
          setSpinner(true);
          const resultado = await controllerUsuario.cadastrarUsuario(body);
          setSpinner(false);
          setTipoAlerta(resultado.status === "sucesso");
          setMsgAlerta(resultado.mensagem);
        }
      });
    schemaCadastro.validate(dadosCadastro)
      .then(() => console.log("Dados válidos para cadastro"))
      .catch((err) => {
        const erro = err.errors[0] || ""; 
        setMsgAlerta(erro);
      });
  }
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Dados do novo usuário
      </Text>
      {
        Object.keys(dadosInputCadastro).map((item) => (
          <Input
            maxLength={dadosInputCadastro[item].nome === "senha" ? 8 : null}
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
        {/* {
          spinner
          ? (
            <Button
              title="Cadastrando usuário"
              onPress={cadastrar}
              disabled={true}
              containerStyle={{ backgroundColor: "#f2f2f2"}}
            />
          )
          : (
            <Button
              title="CADASTRAR"
              onPress={cadastrar}
            />
          )
        } */}
        <BotaoAcao
          titulo={spinner ? "Cadastrando usuário..." : "CADASTRAR"}
          acao={cadastrar}
          desativado={spinner}
          estilo={spinner ? { backgroundColor: "#f2f2f2"} : null}
        />
      </View>
    </View>
  )
}

export default CadastroUsuario;