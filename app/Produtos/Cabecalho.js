import { Text, ListItem } from "react-native-elements";
import { Produtos } from '../models/produtos';

export function Cabecalho() {
  const dados = Produtos.dadosCabecalho();
  return (
    <ListItem>
      {
        dados.map((item) => (
          <ListItem.Content key={`cont-${item.rotulo}`}>
            <ListItem.Title key={`title-${item.rotulo}`}>{item.rotulo}</ListItem.Title>
          </ListItem.Content>
        ))
      }
    </ListItem>
  )
}