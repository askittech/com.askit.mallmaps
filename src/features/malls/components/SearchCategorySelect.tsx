import { forwardRef } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

import classNames from 'classnames';

import { Icon, Icons } from '@/components/Icon';
import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';

import { SearchCategory } from '../enums/search';

type SearchCategoryBottomSheetProps = Omit<
  BottomSheetModalProps,
  'children'
> & {
  current: SearchCategory;
  onSelect: (option: SearchCategory, icon: Icons) => void;
};

const SNAP_POINTS = ['45%'];

export const SearchCategorySelect = forwardRef<
  BottomSheetModal,
  SearchCategoryBottomSheetProps
>((props, ref) => {
  const { current, onSelect } = props;

  return (
    <BottomSheetModal ref={ref} snapPoints={SNAP_POINTS}>
      <View className="px-4 py-2">
        <Text className="font-primary font-bold text-xl">
          Categoria de tu búsqueda
        </Text>
        <Text className="font-primary text-gray-400">
          ¿Qué deseas encontrar dentro del centro comercial?
        </Text>
        <View className="mt-4 space-y-4">
          <SearchCategoryOption
            label="Tiendas"
            icon={Icons.shop}
            selected={current === SearchCategory.Shop}
            onPress={() => onSelect(SearchCategory.Shop, Icons.shop)}
          />
          <SearchCategoryOption
            label="Productos"
            icon={Icons.cart}
            selected={current === SearchCategory.Products}
            onPress={() => onSelect(SearchCategory.Products, Icons.cart)}
          />
          <SearchCategoryOption
            label="Contactos"
            icon={Icons.user}
            selected={current === SearchCategory.Contacts}
            onPress={() => onSelect(SearchCategory.Contacts, Icons.user)}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
});

type SearchCategoryOptionProps = PressableProps & {
  label: string;
  icon: Icons;
  selected: boolean;
};

function SearchCategoryOption({
  label,
  icon,
  selected,
  ...rest
}: SearchCategoryOptionProps) {
  return (
    <Pressable {...rest} className="flex-row items-center justify-between">
      <View className="flex-row items-center space-x-3">
        <View
          className={classNames('p-3 bg-gray-100 rounded-lg', {
            'bg-primary': selected,
          })}
        >
          <Icon
            name={icon}
            size={20}
            className={classNames('text-primary', { 'text-white': selected })}
          />
        </View>
        <Text className="font-primary font-bold text-gray-400">{label}</Text>
      </View>
      {selected ? (
        <Icon name={Icons.check} size={20} className="text-primary" />
      ) : null}
    </Pressable>
  );
}
