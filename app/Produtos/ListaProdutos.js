import { Text, ListItem, Icon } from "react-native-elements";
import { ProdutoFavorito } from './ProdutoFavorito';
import { Skeleton } from '@rneui/themed';

const Carregando = () => {
  const carregando = [];
  for (let index = 0; index <= 3; index++) {
    carregando.push(
      <Skeleton
        key={`componente-${index}`}
        animation="pulse"
        width={"100%"}
        height={50}
        style={{ marginBottom: "10px"}}
      />
    )
  }
  return carregando;
}

export function ListaProdutos({ listaProdutos, navigation, buscandoDados }) {
  const renderComponente = () => {
    if (buscandoDados) return <Carregando />
    if (!listaProdutos || !listaProdutos.length) {
      return (
        <Text h5>Nenhum produto encontrado</Text>
      )
    }
    return (
      listaProdutos.map((produto, i) => (
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
            <ListItem.Subtitle>
            <Icon
              key={`iconDetalhes${produto.nome}`}
              name="list"
              type="font-awesome"
              color="#696969"
              onPress={() => navigation
                .navigate(
                  "DatalhesProduto",
                  { produto }
                )
              }
            />
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    )
  }
  return renderComponente();
}