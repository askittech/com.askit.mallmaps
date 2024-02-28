import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { DrawerNavigator } from '@/navigation/navigators/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
