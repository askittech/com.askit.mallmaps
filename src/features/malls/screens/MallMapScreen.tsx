import { Fragment, useLayoutEffect, useRef } from 'react';
import { Text, View } from 'react-native';

import { ConnectedContact } from '@/features/users/interfaces/contact';
import { DrawerNavigatorScreenProps } from '@/navigation/types/DrawerNavigator';
import { NativeStackNavigatorScreenProps } from '@/navigation/types/NativeStackNavigator';
import { CompositeScreenProps } from '@react-navigation/native';

import { ContactsDrawer, Methods } from '../components/ContactsDrawer';
import { UserPicture } from '../components/UserPicture';

type Props = CompositeScreenProps<
  DrawerNavigatorScreenProps<'MallMap'>,
  NativeStackNavigatorScreenProps
>;

export function MallMapScreen({ navigation }: Props) {
  const ref = useRef<Methods>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <UserPicture
          source={'https://picsum.photos/400'}
          onPress={() => ref.current!.toggle()}
        />
      ),
    });
  }, [navigation]);

  const onContactPress = (contact: ConnectedContact) => {
    navigation.navigate('UserProfile', { id: contact.id });
  };

  return (
    <Fragment>
      <View className="flex-1 items-center justify-center">
        <Text className="font-primary">MallMap</Text>
      </View>
      <ContactsDrawer ref={ref} onContactPress={onContactPress} />
    </Fragment>
  );
}
