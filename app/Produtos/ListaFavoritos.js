import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-elements';
import { Cabecalho } from './Cabecalho';
import { ListaProdutos } from './ListaProdutos';
import controllerProdutos from '../../api/controllers/produtos';
import { adicionarFlagFavorito } from '../utils/funcoes/adicionarFlagFavorito';



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

const listaQualificada = (lista) => {
  return adicionarFlagFavorito(lista);
}

export function ListaFavoritos({ navigation }) {
  const { container, titulo } = estilo;
  const [buscandoDados, setBuscandoDados] = useState(false);
  const [listaProdutosFavoritos, setProdutosFavoritos] = useState({
    status: null,
    mensagem: null,
    dados: null
  });
  
  useEffect(() => {
    async function buscarProdutosFavoritos() {
      setBuscandoDados(true);
      const favoritos = await controllerProdutos.consultarProdutosFavoritos();
      setBuscandoDados(false);
      setProdutosFavoritos({
        status: favoritos.status,
        mensagem: favoritos.mensagem,
        dados: listaQualificada(favoritos.dados)
      });
    }
    buscarProdutosFavoritos();
  }, []);
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Lista de Favoritos
      </Text>
      <View style={{ width: "95%" }}>
        <Cabecalho />
        <ListaProdutos
          listaProdutos={listaProdutosFavoritos.dados}
          navigation={navigation}
          buscandoDados={buscandoDados}
        />
      </View>
    </View>
  )
}