import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from './app/Navegacao/Stack';
import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';

export default function App() {
  enableExperimentalWebImplementation(true);

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
}

