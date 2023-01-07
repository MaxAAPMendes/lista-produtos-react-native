// import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PerfilUsuario } from "../screens/PerfilUsuario";

const Drawer = createDrawerNavigator();

export function MenuLateral() {
  
  return (
    // <NavigationContainer>
    <Drawer.Navigator initialRouteName="Perfil">
      <Drawer.Screen name="Perfil" component={PerfilUsuario}/>
    </Drawer.Navigator>
    // </NavigationContainer>
  )
}