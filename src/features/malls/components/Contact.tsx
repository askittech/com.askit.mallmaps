import { Pressable, PressableProps, Text, View } from 'react-native';

import { ConnectedContact } from '@/features/users/interfaces/contact';

import { UserPicture } from './UserPicture';

type Props = PressableProps & {
  contact: ConnectedContact;
};

export function Contact({ contact, ...rest }: Props) {
  return (
    <Pressable {...rest} className="flex-row">
      <UserPicture source={contact.user.photo} />
      <View>
        <Text className="font-primary font-bold">{contact.user.name}</Text>
        <Text className="font-primary text-gray-400 text-xs">
          {contact.distance} metros
        </Text>
      </View>
    </Pressable>
  );
}
