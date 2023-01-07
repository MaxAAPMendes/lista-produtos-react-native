import { View, StyleSheet } from "react-native";
import { Text, ListItem} from "react-native-elements";

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
  }
});

const mocks = [
  {
    nome: "Uva",
    preco: "R$ 5,00",
    favorito: true,
    lojas: ["Santo Cristo", "Taguatinga", "Gama"]
  },
  {
    nome: "Maça",
    preco: "R$ 5,00",
    favorito: false,
    lojas: ["Santo Cristo", "Taguatinga", "Gama"]
  },
  {
    nome: "Banana",
    preco: "R$ 5,00",
    favorito: true,
    lojas: ["Santo Cristo", "Taguatinga", "Gama"]
  },
  {
    nome: "Tomate",
    preco: "R$ 5,00",
    favorito: false,
    lojas: ["Santo Cristo", "Taguatinga", "Gama"]
  },
]
export function Produtos() {
  const { container, titulo } = estilo;
  return (
    <View style={container}>
      <Text h5 style={titulo}>Lista de Produtos Cadastrados</Text>
      <View style={{ width: "100%" }}>
        {
          mocks.map((item, i) => (
            <ListItem key={`${item.nome}-${i}`} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Subtitle>{item.preco}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Subtitle>{item.favorito ? "sim" : "nao"}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Subtitle>{item.lojas[0]}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
    </View>
  )
}