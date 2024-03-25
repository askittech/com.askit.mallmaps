import { Image, View, ViewProps } from 'react-native';

type Props = ViewProps & {
  source: string;
};

export function UserPicture({ source, ...rest }: Props) {
  return (
    <View {...rest} className="mr-3">
      <Image
        source={{ uri: source }}
        width={32}
        height={32}
        className="rounded-full"
      />
      <View className="absolute bottom-0 right-0 w-[10] h-[10] bg-primary rounded-full border-2 border-white" />
    </View>
  );
}
