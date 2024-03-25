import { UserProfileScreen } from '@/features/users/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NativeStackNavigatorParamList } from '../types/NativeStackNavigator';
import { DrawerNavigator } from './DrawerNavigator';

const NativeStack = createNativeStackNavigator<NativeStackNavigatorParamList>();

export function NativeStackNavigator() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <NativeStack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ headerTitle: '', headerBackTitle: 'Mapa' }}
      />
    </NativeStack.Navigator>
  );
}
