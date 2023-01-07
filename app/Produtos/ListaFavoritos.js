import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text, ListItem } from 'react-native-elements';
import { Produtos as ModelProduto } from '../models/produtos';
import { Cabecalho } from './Cabecalho';
import { ListaProdutos } from './ListaProdutos';

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

const mocks = [
  {
    nome: "Leite",
    preco: "R$ 25,52",
    favorito: true,
    detalhes: "Detalhes do produto leite"
  },
  {
    nome: "Cerveja",
    preco: "R$ 25,52",
    favorito: true,
    detalhes: "Detalhes do produto CERVEJA"
  },
  {
    nome: "Carne de frango",
    preco: "R$ 25,52",
    favorito: true,
    detalhes: "Detalhes do produto Carne de frango"
  },
  {
    nome: "Tomate",
    preco: "R$ 25,52",
    favorito: true,
    detalhes: "Detalhes do produto TOMATE"
  },
];

export function ListaFavoritos({ navigation }) {
  const { container, titulo } = estilo;
  const [listaProdutosFavoritos, setProdutosFavoritos] = useState(null);
  
  useEffect(() => {
    // buscar lista na api
    setProdutosFavoritos(mocks);
  }, []);
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Lista de Favoritos
      </Text>
      <View style={{ width: "95%" }}>
        <Cabecalho />
        <ListaProdutos listaProdutos={mocks} navigation={navigation}/>
      </View>
    </View>
  )
}