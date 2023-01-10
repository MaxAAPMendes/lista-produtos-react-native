import { Text, ListItem, Icon } from "react-native-elements";
import { ProdutoFavorito } from './ProdutoFavorito';
import { Skeleton } from '@rneui/themed';

const estiloTitulo = {
  width: "20vw",
  whiteSpace: "nowrap", 
  overflow: "hidden",
  textOverflow: "ellipsis",
}

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
        <ListItem key={`${produto._id}-${i}`} bottomDivider>
          <ListItem.Content key={`cont-nome${produto._id}-${i}`}>
            <ListItem.Title
              key={`linome${produto._id}-${i}`}
              style={estiloTitulo}
            >
              {produto.name}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content key={`cont-preco${produto._id}-${i}`}>
            <ListItem.Subtitle key={`lipreco${produto._id}-${i}`}>{produto.price}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content key={`cont-fav${produto._id}-${i}`}>
            <ListItem.Subtitle key={`lifav${produto._id}-${i}`}>
              <ProdutoFavorito produto={produto}/>
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Subtitle>
            <Icon
              key={`iconDetalhes${produto._id}`}
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