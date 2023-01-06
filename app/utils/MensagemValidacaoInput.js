
import { View, StyleSheet } from "react-native";
import { Text } from '@rneui/themed';

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "20px",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "10px",
    padding: "0px 10px",
    textAlign: "left",
  },
  texto: {
    margin: "10px",
    padding: "0px 10px",
    width: "100%",
    fontWeight: "400",
  }
})

export function MensagemValidacaoInput({tipoAlerta, msgAlerta}) {
  const {
    container, texto
  } = estilos;
  return (
    <View style={container}>
      <Text p style={{ ...texto, color: tipoAlerta ? "green" : "red" }}>
        {msgAlerta}
      </Text>
    </View>
  )
}