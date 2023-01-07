import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const estilo = StyleSheet.create({
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

export function DatalhesProduto({ route }) {
  console.log("Componente detalhes", route.params?.produto);
  const { produto } = route.params;
  const { container, titulo } = estilo;
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Detalhes do Produto
      </Text>
      {
        produto && (
          <Text>
            {produto.detalhes}
          </Text>
        )
      }
    </View>
  )
}