import { View, Text, StyleSheet } from "react-native";

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
  }
});

function Login() {
  const {
    container, tituloTela
  } = estiloComponente;
  return (
    <View style={container}>
      <Text style={tituloTela}>Tela de login</Text>
    </View>
  )
};

export default Login;
