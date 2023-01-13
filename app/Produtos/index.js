import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Cabecalho } from './Cabecalho';
import { ProdutoFavorito } from './ProdutoFavorito';
import { Icon } from 'react-native-elements';
import { ListaProdutos } from './ListaProdutos';
import controllerProdutos from '../../api/controllers/produtos';


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
  tituloErro: {
    color: "red"
  },
  containerSlider: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #dcdcdc",
    "& > *": {
      margin: "10px"
    }
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

const determinarNumeroPaginas = (totalItems) => {
  if (totalItems <= 5) return 1;
  if (!(totalItems%5)) return (totalItems/5);
  return (Math.floor(totalItems/5) + 1);
}

export function Produtos({ navigation }) {
  const { container, titulo, tituloErro, containerSlider } = estilo;
  const[dados, setDados] = useState({
    status: "sucesso",
    statusCode: null,
    mensagem: null,
    dados: []
  });
  const[buscandoDados, setBuscandoDados] = useState(false);
  const[pagina, setPagina] = useState(1);

  console.log("listaProdutos -------->", dados);
  useEffect(() => {
    async function buscarProdutos() {
      setBuscandoDados(true);
      const data = await controllerProdutos.consultarProdutos(pagina);
      setBuscandoDados(false);
      setDados(data);
    }
    buscarProdutos();
  }, [pagina]);
  const diminuirPagina = () => {
    if (pagina === 1) return null;
    setPagina(pagina - 1)
  }
  const aumentarPagina = (totalPaginas) => {
    if (pagina >= totalPaginas) return null;
    setPagina(pagina + 1);
  }
  const slider = (totalItems) => {
    if (!totalItems) return null;
    const totalPaginas = determinarNumeroPaginas(totalItems);
    return (
      <div style={containerSlider}>
        <Icon
          size={20}
          raised
          color="#2673b3"
          name="caret-left"
          type="font-awesome"
          onPress={diminuirPagina}
        />
        <Text p>{`página ${pagina} de ${totalPaginas}`}</Text>
        <Icon
          size={20}
          raised
          color="#2673b3"
          name="caret-right"
          type="font-awesome"
          onPress={() => aumentarPagina(totalPaginas)}
        />
      </div>
    )
  }
  const renderComponente = () => {
    if (dados.status === "erro") {
      return (
        <>
          <Text h5 style={tituloErro}>Erro ao consultar lista de produtos</Text>
          <Text p style={tituloErro}>{dados.mensagem || "Tente mais tarde ou faça novo login"}</Text>
        </>
      )
    }
    return (
      <View style={{ width: "95%" }}>
        <Cabecalho />
        <ListaProdutos
          // listaProdutos={mocks}
          listaProdutos={dados.dados.products || []}
          navigation={navigation}
          buscandoDados={buscandoDados}
        />
        {slider(dados.dados.totalItems)}
      </View>
    )
  }
  return (
    <View style={container}>
      <Text h5 style={titulo}>Lista de Produtos Cadastrados</Text>
      {renderComponente()}
    </View>
  );
}