import { Pressable, Text, View } from 'react-native';

import { UserPicture } from './UserPicture';

export function Contact() {
  return (
    <Pressable className="flex-row">
      <UserPicture />
      <View>
        <Text className="font-primary font-bold">Gabriel Pino</Text>
        <Text className="font-primary text-gray-400 text-xs">200 metros</Text>
      </View>
    </Pressable>
  );
}
