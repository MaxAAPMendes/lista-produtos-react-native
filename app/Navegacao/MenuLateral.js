import { createDrawerNavigator } from "@react-navigation/drawer";
import { Produtos } from "../Produtos";
import { PerfilUsuario } from "../screens/PerfilUsuario";
import { ListaFavoritos } from '../Produtos/ListaFavoritos';

const Drawer = createDrawerNavigator();

export function MenuLateral({ dadosUsuario }) {
  console.log("Menulateral", dadosUsuario);
  return (
    <Drawer.Navigator initialRouteName="Produtos">
      <Drawer.Screen name="Perfil" component={PerfilUsuario} initialParams={dadosUsuario}/>
      <Drawer.Screen name="Produtos" component={Produtos} />
      <Drawer.Screen
        name="ListaFavoritos"
        component={ListaFavoritos}
        options={{ title: "Lista de Favoritos" }}
      />
    </Drawer.Navigator>
  )
}