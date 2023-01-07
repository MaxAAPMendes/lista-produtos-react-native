import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Cabecalho } from './Cabecalho';
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
];

export function Produtos() {
  const { container, titulo } = estilo;
  return (
    <View style={container}>
      <Text h5 style={titulo}>Lista de Produtos Cadastrados</Text>
      <View style={{ width: "100%" }}>
        <Cabecalho />
        {
          mocks.map((produto, i) => (
            <ListItem key={`${produto.nome}-${i}`} bottomDivider>
              <ListItem.Content key={`cont-nome${produto.nome}-${i}`}>
                <ListItem.Title key={`linome${produto.nome}-${i}`}>{produto.nome}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content key={`cont-preco${produto.nome}-${i}`}>
                <ListItem.Subtitle key={`lipreco${produto.nome}-${i}`}>{produto.preco}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content key={`cont-fav${produto.nome}-${i}`}>
                <ListItem.Subtitle key={`lifav${produto.nome}-${i}`}>
                  <ProdutoFavorito produto={produto}/>
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Subtitle>{produto.lojas[0]}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
    </View>
  )
}