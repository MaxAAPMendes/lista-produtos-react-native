import { View, StyleSheet, TextInput } from "react-native";
import { Input, Button } from 'react-native-elements';
import { Text } from '@rneui/themed';
import { useState } from "react";

const estiloComponente = StyleSheet.create({
  container: {
    background: "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  const entrar = () => {
    console.log("entrou", email, senha);
    /* 
      navigation.navigate("Home");
      navega para a página, contudo guarda a referência das anteriores, permitindo voltar
    */
    navigation.reset({
      index: 0, // zera a pilha
      routes: [{ name: "Home" }]
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
          // errorMessage='Entrada inválida'
        />
        <Input
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          placeholder='informe a senha'
          errorStyle={{ color: 'red' }}
          label="Senha"
          secureTextEntry={true}
          key="senhaInput"
          onChangeText={(value) => setSenha(value)}
          // errorMessage='Entrada inválida'
        />
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
