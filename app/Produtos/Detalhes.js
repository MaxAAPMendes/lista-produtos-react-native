import { View, StyleSheet } from 'react-native';
import { Icon, Text, ListItem } from 'react-native-elements';
import { Produtos } from '../models/produtos';
import { ProdutoFavorito } from './ProdutoFavorito';

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
  const cabecalho = Produtos.dadosCabecalho().filter((i) => i.campo !== 'detalhes');
  const camposDetalhes = Produtos.camposDetalhes();
  const { produto } = route.params;
  const { container, titulo } = estilo;
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Detalhes do Produto
      </Text>
      {
        produto && (
          <View style={{ width: "95%" }}>
            <ListItem>
              {
                cabecalho.map((item) => (
                  <ListItem.Content key={`cont-${item.rotulo}`}>
                    <ListItem.Title key={`title-${item.rotulo}`}>{item.rotulo}</ListItem.Title>
                  </ListItem.Content>
                ))
              }
            </ListItem>
            <ListItem>
              {
                camposDetalhes.map((campo) => (
                  <ListItem.Content key={`cont-fav${produto[campo]}`}>
                    <ListItem.Subtitle key={`lifav${produto[campo]}`}>
                      {campo === 'favorite'
                        ? <ProdutoFavorito produto={produto}/>
                        : produto[campo]
                      }
                    </ListItem.Subtitle>
                  </ListItem.Content>
                ))
              }
            </ListItem>
          </View>
        )
      }
      <View>
        mapa
      </View>
    </View>
  )
}