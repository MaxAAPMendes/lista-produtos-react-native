import { createDrawerNavigator } from "@react-navigation/drawer";
import { Produtos } from "../Produtos";
import { PerfilUsuario } from "../screens/PerfilUsuario";

const Drawer = createDrawerNavigator();

export function MenuLateral({ params }) {
  
  return (
    <Drawer.Navigator initialRouteName="Produtos">
      <Drawer.Screen name="Perfil" component={PerfilUsuario} />
      <Drawer.Screen name="Produtos" component={Produtos} />
    </Drawer.Navigator>
  )
}