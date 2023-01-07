
import { createStackNavigator } from "@react-navigation/stack";
import { ModelApp } from '../models/app';
import Login from '../screens/Login';
import Home from '../screens/Home';
import CadastroUsuario from '../screens/CadastroUsuario';
import { DatalhesProduto } from '../Produtos/Detalhes';

const StackNavegacao = createStackNavigator();

export function Stack() {
  const stackConfig = ModelApp.configStack();
  return (
    <StackNavegacao.Navigator initialRouteName="Login" screenOptions={{ title: stackConfig.login.title }}>
      <StackNavegacao.Screen name="Login" component={Login} />
      <StackNavegacao.Screen
        name="Home"
        component={Home}
        options={{ title: stackConfig.home.title, headerShown: false }}
      />
      <StackNavegacao.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
        options={{ title: stackConfig.cadastro.title }}
      />
      <StackNavegacao.Screen
        name="DatalhesProduto"
        component={DatalhesProduto}
        options={{ title: "Datalhes do Produto" }}
      />
    </StackNavegacao.Navigator>
  )
}