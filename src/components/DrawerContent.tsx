import { Fragment } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { Icon, Icons } from './Icon';

export function DrawerContent(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();

  return (
    <Fragment>
      <DrawerContentScrollView {...props}>
        <View className="items-center border-b-2 border-gray-100 pb-6">
          <Image
            source={{
              uri: 'https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg',
            }}
            width={100}
            height={100}
            className="rounded-full"
          />
          <View className="flex-row items-center space-x-2 mt-2">
            <Text className="font-primary font-bold text-lg leading-5">
              Gian López
            </Text>
            <Icon name={Icons.check} size={14} className="text-primary" />
          </View>
          <Text className="font-primary font-medium text-gray-400 mb-4">
            @glopez
          </Text>
          <Pressable className="flex-row items-center space-x-2">
            <Text className="font-primary text-primary">Editar perfil</Text>
            <Icon name={Icons.arrow_right} size={10} className="text-primary" />
          </Pressable>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        className="w-full absolute bottom-0 items-center"
        style={{ marginBottom: insets.bottom }}
      >
        <Pressable onPress={() => {}}>
          <Text className="font-primary text-red-500 font-bold">
            Cerrar sesión
          </Text>
        </Pressable>
      </View>
    </Fragment>
  );
}
