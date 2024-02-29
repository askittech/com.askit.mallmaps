import { Image, Pressable, PressableProps, View } from 'react-native';

export function UserPicture(props: PressableProps) {
  return (
    <Pressable {...props} className="mr-3">
      <Image
        source={{
          uri: 'https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg',
        }}
        width={32}
        height={32}
        className="rounded-full"
      />
      <View className="absolute bottom-0 right-0 w-[10] h-[10] bg-primary rounded-full" />
    </Pressable>
  );
}
