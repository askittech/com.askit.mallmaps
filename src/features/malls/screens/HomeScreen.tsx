import { Fragment, useLayoutEffect, useRef } from 'react';
import { Text, View } from 'react-native';

import { DrawerNavigatorScreenProps } from '@/navigation/types/DrawerNavigator';

import { ContactsDrawer, Methods } from '../components/ContactsDrawer';
import { UserPicture } from '../components/UserPicture';

type Props = DrawerNavigatorScreenProps<'Home'>;

export function HomeScreen({ navigation }: Props) {
  const ref = useRef<Methods>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <UserPicture onPress={() => ref.current!.toggle()} />,
    });
  }, [navigation]);

  return (
    <Fragment>
      <View className="flex-1 items-center justify-center">
        <Text>Home</Text>
      </View>
      <ContactsDrawer ref={ref} />
    </Fragment>
  );
}
