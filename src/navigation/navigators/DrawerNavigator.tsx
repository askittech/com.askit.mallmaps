import { DrawerContent } from '@/components/DrawerContent';
import { MallMapScreen } from '@/features/malls';
import { DrawerNavigatorParamList } from '@/navigation/types/DrawerNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="MallMap"
        component={MallMapScreen}
        options={{ title: 'Mapa', headerTransparent: true, headerTitle: '' }}
      />
    </Drawer.Navigator>
  );
}
