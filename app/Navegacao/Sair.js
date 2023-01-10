
export function Sair({ navigation }) {
  localStorage.removeItem("tokenSalvoUser");
  console.log("deslogando o usuário...")
  return navigation.reset({
    index: 0,
    routes: [{ name: "Login" }]
  })
};