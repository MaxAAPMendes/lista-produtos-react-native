import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from './app/Navegacao/Stack';
import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  enableExperimentalWebImplementation(true);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

