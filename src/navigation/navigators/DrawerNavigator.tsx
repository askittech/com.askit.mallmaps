import { DrawerContent } from '@/components/DrawerContent';
import { HomeScreen } from '@/features/malls';
import { DrawerParamList } from '@/navigation/types/DrawerNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
