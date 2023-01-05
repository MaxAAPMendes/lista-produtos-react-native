import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from './app/screens/Login';
import Home from './app/screens/Home';

const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator initialRouteName="Login">
        <Navegacao.Screen name="Login" component={Login} />
        <Navegacao.Screen name="Home" component={Home} />
      </Navegacao.Navigator>
    </NavigationContainer>
  )
}


// app original
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Lista de Produtos!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
