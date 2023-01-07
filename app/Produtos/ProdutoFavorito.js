import { useState } from "react";
import { Icon } from 'react-native-elements';

export function ProdutoFavorito({ produto }) {
  const { favorito } = produto;
  const [favoritado, setFavoritado] = useState(favorito);
  const favoritarProduto = () => {
    console.log('chamada para a gravação de fav', produto);
    setFavoritado(!favoritado);
  }
  return (
    <Icon
      key={`icon${produto.nome}`}
      raised
      // containerStyle={{ fontSize: ".5rem" }}
      name="heart"
      type="font-awesome"
      color={favoritado ? '#f50' : "#f2f2f2"}
      onPress={favoritarProduto}
    />
  )
}