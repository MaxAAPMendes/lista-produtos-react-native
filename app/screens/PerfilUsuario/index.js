import { View, StyleSheet } from "react-native";
import { Text, Icon } from "react-native-elements";
// import { Avatar } from '@rneui/themed';

const estiloComponente = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#2673b3",
    margin: "5px"
  },
});

export function PerfilUsuario({ route }) {
  console.log("perfil", route);
  const { params } = route;
  // const nomeUsuario = route
  const { container, titulo } = estiloComponente;
  return (
    <View style={container}>
      <Icon
        size={50}
        rounded
        raised
        name="user"
        type="font-awesome"
        // containerStyle={{ backgroundColor: '#eb1561' }}
      />
      {
        params 
        ? Object.keys(params).map((item) => (
          <Text p style={titulo} key={params[item]}>{params[item]}</Text>
        ))
        : (<Text p style={titulo}>Usuário não identificado</Text>)
      }
    </View>
  )
}