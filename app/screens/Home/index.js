import { View, Text, StyleSheet } from "react-native";

const estiloComponente = StyleSheet.create({
  container: {
    background: "blue"
  },
  titulo: {
    color: "#fff"
  }
});

function Home() {
  const {
    container, titulo
  } = estiloComponente;
  return(
    <View style={container}>
      <Text style={titulo}>Tela Principal - Home</Text>
    </View>
  )
};

export default Home;