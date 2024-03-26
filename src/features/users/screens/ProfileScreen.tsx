import { ImageBackground, Text, View } from 'react-native';

export function UserProfileScreen() {
  return (
    <View className="flex-1">
      <View className="w-full h-[200]">
        <ImageBackground
          source={{ uri: 'https://picsum.photos/300' }}
          className="flex-1"
        />
      </View>
      <Text>ProfileScreen</Text>
    </View>
  );
}
