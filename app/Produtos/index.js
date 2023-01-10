import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Cabecalho } from './Cabecalho';
import { ProdutoFavorito } from './ProdutoFavorito';
import { Icon } from 'react-native-elements';
import { ListaProdutos } from './ListaProdutos';
import controllerUsuario from '../../api/controllers/usuario';

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
    detalhes: "Detalhes do produto UVA"
  },
  {
    nome: "Maça",
    preco: "R$ 5,00",
    favorito: false,
    detalhes: "Detalhes do produto MAÇA"
  },
  {
    nome: "Banana",
    preco: "R$ 5,00",
    favorito: true,
    detalhes: "Detalhes do produto BANANA"
  },
  {
    nome: "Tomate",
    preco: "R$ 5,00",
    favorito: false,
    detalhes: "Detalhes do produto TOMATE"
  },
];

export function Produtos({ navigation }) {
  const { container, titulo } = estilo;
  const[listaProdutos, setListaProdutos] = useState([]);
  const[buscandoDados, setBuscandoDados] = useState(false);

  console.log("listaProdutos -------->", listaProdutos);
  useEffect(() => {
    async function buscarProdutos() {
      console.log("consultando lista de produtos --->");
      setBuscandoDados(true);
      const data = await controllerUsuario.consultarProdutos();
      setBuscandoDados(false);
      console.log(data);
      const { products = [] } = data;
      setListaProdutos(products);
    }
    buscarProdutos();
  }, []);
  return (
    <View style={container}>
      <Text h5 style={titulo}>Lista de Produtos Cadastrados</Text>
      <View style={{ width: "95%" }}>
        <Cabecalho />
        <ListaProdutos
          listaProdutos={mocks}
          navigation={navigation}
          buscandoDados={buscandoDados}
        />
      </View>
    </View>
  )
}