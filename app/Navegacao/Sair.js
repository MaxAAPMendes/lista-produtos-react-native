// import { Icon } from "react-native-elements"

export function Sair({ navigation }) {
  localStorage.removeItem("tokenUser");
  console.log("deslogandoo")
  return navigation.reset({
    index: 0,
    routes: [{ name: "Login" }]
  })
}
// return (
//   <Icon
//     type="font-awesome"
//     name="right-from-bracket"
//     onPress={() => navigation.goBack()}
//     onPress={() => navigation.rest({
//       index: 0, // zera a pilha
//       routes: [{ name: "Login" }],
//     })}
//   />
// )