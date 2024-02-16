import { Image, Text, View } from 'react-native';

import { Home } from '@/screens/Home';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Link } from '@react-navigation/native';

import { DrawerParamList } from '../types/Drawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="items-center">
        <Image
          source={{
            uri: 'https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg',
          }}
          width={100}
          height={100}
          className="rounded-full"
        />
        <Text className="font-primary font-bold text-lg">Gian López</Text>
        <Text className="font-primary font-medium text-gray-400">@glopez</Text>
        <Link to="Home" className="font-primary">
          Editar perfil
        </Link>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
