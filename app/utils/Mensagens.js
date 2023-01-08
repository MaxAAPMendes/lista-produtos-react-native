// import Snackbar from 'react-native-snackbar';

const estilo = {
  sucesso: {
    backgroundColor: "#2673b3",
    color: "#fff",
    fontWeidth: "bold"
  },
  erro: {
    backgroundColor: "red",
    color: "#fff",
    fontWeidth: "bold"
  }
}
export function Mensagem({ texto, tipoAlerta, acao }) {
  // return Snackbar.show({
  //   text: texto,
  //   duration: Snackbar.LENGTH_SHORT,
  //   backgroundColor: estilo[tipoAlerta].backgroundColor || "#2673b3",
  //   textColor: estilo[tipoAlerta].backgroundColor || "#fff",
  //   onPress: () => acao
  // })
}