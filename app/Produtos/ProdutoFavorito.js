import { async } from "q";
import { useState } from "react";
import { Icon } from 'react-native-elements';
import controllerProdutos from '../../api/controllers/produtos';
import modelApp from '../models/app';

export function ProdutoFavorito({ produto }) {
  const { favorite } = produto;
  const [favoritado, setFavoritado] = useState(favorite);
  const [msg, setMsg] = useState({status: "sucesso", msg: ""});
  const favoritarProduto = async () => {
    const resultado = await controllerProdutos.gerenciarFavorito({
      productID: produto._id
    });
    setMsg({
      status: resultado.status,
      msg: resultado.mensagem
    });
    setFavoritado(!favoritado);
    modelApp.executaAcaoPorTempo(() => setMsg({ msg: "" }), 5000);
  }
  return (
    <>
      <Icon
        key={`icon${produto._id}`}
        raised
        // containerStyle={{ fontSize: ".5rem" }}
        name="heart"
        type="font-awesome"
        color={favoritado ? '#f50' : "#f2f2f2"}
        onPress={favoritarProduto}
      />
      <span
        style={{
          fontSize: ".5rem",
          fontWeight: "700",
          color: msg.status === "sucesso" ? "green" : "red"
        }}
      >{msg.msg}</span>
    </>
  )
}