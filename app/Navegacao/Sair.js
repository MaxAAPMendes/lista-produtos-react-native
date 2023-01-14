
export function Sair({ navigation }) {
  localStorage.removeItem("tokenSalvoUser");
  return navigation.reset({
    index: 0,
    routes: [{ name: "Login" }]
  })
};