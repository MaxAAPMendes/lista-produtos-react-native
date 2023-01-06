import { View, StyleSheet, TextInput } from "react-native";
import { Input, Button } from 'react-native-elements';
import { Text } from '@rneui/themed';
import { useState } from "react";
import Schemas from '../../schemas';


const estiloComponente = StyleSheet.create({
  container: {
    background: "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tituloTela: {
    color: "#363636",
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

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgalerta, setMsgAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState(false);
  const schemaLogin = Schemas.schemaLogin();
  const entrar = () => {
    schemaLogin.isValid({email, senha})
      .then((valido) => {
        setTipoAlerta(valido);
        if (valido) {
          navigation.reset({
            index: 0, // zera a pilha
            routes: [{ name: "Home" }]
          });
        }
      });
    schemaLogin.validate({email, senha})
      .then(() => setMsgAlerta("Dados válidos"))
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
        <View>
          <Text p style={{ minHeight: "20px", fontWeight: "400", color: tipoAlerta ? "green" : "red" }}>
            {msgalerta}
          </Text>
        </View>
        <Button
          title="ENTRAR"
          onPress={entrar}
        />
        <View style={boxCadastrese}>
          <Text onPress={cadastrarUsuario} h5 style={cadastrese}>Cadastre-se</Text>
        </View>
      </View>
    </View>
  )
};

export default Login;
