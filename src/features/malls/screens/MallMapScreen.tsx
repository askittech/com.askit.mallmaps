import { useLayoutEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';

import { Icons } from '@/components/Icon';
import { ConnectedContact } from '@/features/users/interfaces/contact';
import { DrawerNavigatorScreenProps } from '@/navigation/types/DrawerNavigator';
import { NativeStackNavigatorScreenProps } from '@/navigation/types/NativeStackNavigator';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useHeaderHeight } from '@react-navigation/elements';
import { CompositeScreenProps } from '@react-navigation/native';

import { ContactsDrawer, Methods } from '../components/ContactsDrawer';
import { Map } from '../components/Map';
import { SearchCategorySelect } from '../components/SearchCategorySelect';
import { SearchInput } from '../components/SearchInput';
import { UserPicture } from '../components/UserPicture';
import { SearchCategory } from '../enums/search';

type SearchCategoryState = {
  category: SearchCategory;
  icon: Icons;
};

type Props = CompositeScreenProps<
  DrawerNavigatorScreenProps<'MallMap'>,
  NativeStackNavigatorScreenProps
>;

export function MallMapScreen({ navigation }: Props) {
  const ref = useRef<Methods>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [searchCategory, setSearchCategory] = useState<SearchCategoryState>({
    category: SearchCategory.Shop,
    icon: Icons.shop,
  });

  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => ref.current!.toggle()}>
          <UserPicture source={'https://picsum.photos/400'} />
        </Pressable>
      ),
    });
  }, [navigation]);

  const onContactPress = (contact: ConnectedContact) => {
    navigation.navigate('UserProfile', { id: contact.id });
  };

  const onSearchCategorySelect = (category: SearchCategory, icon: Icons) => {
    setSearchCategory({ category, icon });
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <>
      <Map />
      <View style={{ marginTop: headerHeight }} className="p-4">
        <SearchInput
          icon={searchCategory.icon}
          onFilter={() => bottomSheetModalRef.current?.present()}
        />
      </View>
      <SearchCategorySelect
        ref={bottomSheetModalRef}
        current={searchCategory.category}
        onSelect={onSearchCategorySelect}
      />
      <ContactsDrawer ref={ref} onContactPress={onContactPress} />
    </>
  );
}
