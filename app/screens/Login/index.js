import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from 'react-native-elements';
import { Text } from '@rneui/themed';
import { useState } from "react";
import Schemas from '../../schemas';
import { MensagemValidacaoInput } from '../../utils/MensagemValidacaoInput';
import controllerUsuario from '../../../api/controllers/usuario';
import { BotaoAcao } from '../../utils/BotaoAcao';

const estiloComponente = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tituloTela: {
    color: "#2673b3",
    // color: "#363636",
    margin: "10px",
    fontWeight: "bold",
    fontSize: "1rem"
  },
  boxCadastrese: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px"
  },
  cadastrese: {
    color: "#2673b3",
  }
});

const mockUsuario = {
  nome: "José Testes da Silva",
  idade: "26 anos",
  cargo: "Gerente"
}
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded .split('; ');
  let res;
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  console.log("getCookie", res);
  return res;
}
const gerarCookie = (token, dadosUsuario) => {
  localStorage.setItem('tokenSalvoUser', token);
  localStorage.setItem('dadosUser', dadosUsuario);
}

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgAlerta, setMsgAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [dadosLogin, setDadosLogin] = useState({
    statusLogin: null,
    token: null,
    dadosUsuario: null
  });
  const schemaLogin = Schemas.schemaLogin();
  const navegarParaSistema = () => {
    const {statusLogin, token, dadosUsuario } = dadosLogin;
    const tokenSalvoUser = localStorage.getItem("tokenSalvoUser");
    const dadosSalvoUser = localStorage.getItem("dadosSalvoUser");
    if (token || tokenSalvoUser) {
      return navigation.reset({
        index: 0, // zera a pilha
        routes: [{ name: "Home", params: dadosUsuario || dadosSalvoUser }],
      });
    }
  }
  useEffect(() => {
    console.log("useEffect...")
    navegarParaSistema();
  }, [dadosLogin]);
  const entrar = () => {
    schemaLogin.isValid({email, senha})
      .then(async (valido) => {
        setTipoAlerta(valido);
        if (valido) {
          const body = {
            email,
            password: senha
          }
          setSpinner(true);
          const logado = await controllerUsuario.logar(body);
          setSpinner(false);
          console.log("logdo no logn", logado);
          if (logado.status !== 200) {
            setTipoAlerta(false);
            setMsgAlerta(logado.data.message || "Erro ao logar");
            return null;
          }
          setDadosLogin({
            statusLogin: logado.status,
            token: logado.data.token,
            dadosUsuario: {
              nome: logado.data.name || "não identificado",
              id: logado.data.userId || "não identificado",
              telefone: logado.data.phone || "não identificado"
            }
          })
          gerarCookie(logado.data.token, dadosUsuario);
          navegarParaSistema();
        }
      });
    schemaLogin.validate({email, senha})
      .then(() => () => console.log("Dados de login válidos"))
      .catch((err) => {
        const erro = err.errors[0] || ""; 
        setMsgAlerta(erro);
      });
  };
  const cadastrarUsuario = () => {
    navigation.navigate("CadastroUsuario");
  }
  const {
    container,
    tituloTela,
    cadastrese,
    boxCadastrese
  } = estiloComponente;
  return (
    <View style={container}>
      <Text h3 style={tituloTela}>LISTA DE PRODUTOS</Text>
      <Text style={tituloTela}>Login</Text>
      <View tyle={tituloTela}>
        <Input
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          placeholder='informe o e-mail'
          errorStyle={{ color: 'red' }}
          label="Email"
          keyboardType="email-address"
          key="emailInput"
          onChangeText={(value) => setEmail(value)}
          name="email"
          // errorMessage='Entrada inválida'
        />
        <Input
          maxLength={8}
          name="senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          placeholder='informe a senha'
          errorStyle={{ color: 'red' }}
          label="Senha"
          secureTextEntry={true}
          key="senhaInput"
          onChangeText={(value) => setSenha(value)}
          // errorMessage='Entrada inválida'
        />
        <MensagemValidacaoInput tipoAlerta={tipoAlerta} msgAlerta={msgAlerta} />
        {/* <Button
          title=
          onPress={entrar}
        /> */}
        <BotaoAcao
          titulo={spinner ? "Logando..." : "ENTRAR"}
          acao={entrar}
          desativado={spinner}
          estilo={spinner ? { backgroundColor: "#f2f2f2"} : null}
        />
        <View style={boxCadastrese}>
          <Text onPress={cadastrarUsuario} h5 style={cadastrese}>Cadastre-se</Text>
        </View>
      </View>
    </View>
  )
};

export default Login;
