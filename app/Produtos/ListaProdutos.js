import { Text, ListItem, Icon } from "react-native-elements";
import { ProdutoFavorito } from './ProdutoFavorito';

export function ListaProdutos({ listaProdutos, navigation }) {
  const renderComponente = () => {
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