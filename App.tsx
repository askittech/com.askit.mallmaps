import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NativeStackNavigator } from '@/navigation/navigators/NativeStackNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider>
        <NavigationContainer>
          <NativeStackNavigator />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
