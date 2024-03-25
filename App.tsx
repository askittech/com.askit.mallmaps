import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NativeStackNavigator } from '@/navigation/navigators/NativeStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer>
        <NativeStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
