import { Pressable, TextInput, View, ViewProps } from 'react-native';

import { Icon, Icons } from '@/components/Icon';

type Props = ViewProps & {
  icon: Icons;
  onFilter: () => void;
};

export function SearchInput({ icon, onFilter, ...rest }: Props) {
  return (
    <View {...rest} className="flex-row p-3 bg-white rounded-lg">
      <Pressable className="w-[20]" onPress={onFilter}>
        <Icon name={icon} size={20} className="text-gray-200" />
      </Pressable>
      <View className="w-[2] mx-2 bg-gray-200" />
      <TextInput placeholder="Ej. Calzacosta" className="font-primary flex-1" />
      <Icon name={Icons.loupe} size={20} className="text-gray-200" />
    </View>
  );
}
