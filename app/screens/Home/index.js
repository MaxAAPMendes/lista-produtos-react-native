import { View, Text, StyleSheet } from "react-native";
import { Text as TextUi } from '@rneui/themed';
import { MenuLateral } from "../../Navegacao/MenuLateral";

const estiloComponente = StyleSheet.create({
  container: {
    backgroundColor: "blue"
  },
  titulo: {
    color: "#000"
  }
});

function Home({ route }) {
  const { params } = route;
  const {
    container, titulo
  } = estiloComponente;
  return (<MenuLateral dadosUsuario={params}/>)
};

export default Home;