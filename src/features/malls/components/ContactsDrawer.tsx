import { forwardRef, useImperativeHandle, useState } from 'react';
import { Pressable, Switch, Text, View, ViewProps } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SCREEN_WIDTH } from '@/config/constants';
import colors from '@/config/theme/colors';
import { ConnectedContact } from '@/features/users/interfaces/contact';

import { Contact } from './Contact';

const CONNECTED_CONTACT_MOCK: ConnectedContact = {
  user: {
    photo: 'https://picsum.photos/300',
    name: 'Carlos Osorio',
    username: 'cosorio16',
  },
  distance: 200,
};

type Props = {
  onContactPress: (contact: ConnectedContact) => void;
};

export type Methods = {
  toggle: () => void;
};

const SNAP_POINT = SCREEN_WIDTH * (2 / 3);

export const ContactsDrawer = forwardRef<Methods, Props>((props, ref) => {
  const { onContactPress } = props;

  const [sharingLocation, setSharingLocation] = useState(false);

  const insets = useSafeAreaInsets();

  const opacity = useSharedValue(0);
  const translateX = useSharedValue(SNAP_POINT);

  const wrapperStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedProps = useAnimatedProps<ViewProps>(() => ({
    pointerEvents: opacity.value === 0 ? 'none' : 'auto',
  }));

  useImperativeHandle(ref, () => ({
    toggle: onToggle,
  }));

  const onToggle = () => {
    const opacityValue = opacity.value === 0 ? 0.5 : 0;
    const translateXValue = translateX.value === 0 ? SNAP_POINT : 0;
    opacity.value = withTiming(opacityValue, {
      duration: 300,
    });
    translateX.value = withTiming(translateXValue, {
      duration: 300,
    });
  };

  return (
    <Animated.View
      className="absolute h-full w-full"
      animatedProps={animatedProps}
    >
      <Animated.View className="bg-black w-full h-full" style={wrapperStyles}>
        <Pressable className="flex-1" onPress={onToggle} />
      </Animated.View>
      <Animated.View
        className="absolute right-0 ml-auto px-5 h-full w-2/3 bg-white"
        style={[
          drawerStyle,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <Text className="font-primary font-semibold">Contactos conectados</Text>
        <Text className="font-primary text-gray-400 text-xs mb-4">
          5 contactos se encuentran aquí
        </Text>
        <View className="flex-1">
          <Contact
            contact={CONNECTED_CONTACT_MOCK}
            onPress={() => onContactPress(CONNECTED_CONTACT_MOCK)}
          />
        </View>
        <View className="w-4/7 h-[0.5] bg-gray-200 mb-3" />
        <View className="flex-row items-center justify-between">
          <Text className="font-primary font-semibold">
            Compartir ubicación
          </Text>
          <Switch
            className="scale-50"
            value={sharingLocation}
            trackColor={{ true: colors.primary.DEFAULT }}
            onValueChange={() => setSharingLocation(!sharingLocation)}
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
});
