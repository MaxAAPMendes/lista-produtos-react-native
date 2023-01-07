import { View, Text, StyleSheet } from "react-native";
import { MenuLateral } from "../../Navegacao/MenuLateral";

const estiloComponente = StyleSheet.create({
  container: {
    backgroundColor: "blue"
  },
  titulo: {
    color: "#000"
  }
});

function Home() {
  const {
    container, titulo
  } = estiloComponente;
  return(
    <>
      <View style={container}>
        <Text style={titulo}>Tela Principal - Home</Text>
      </View>
      <MenuLateral />
    </>
  )
};

export default Home;