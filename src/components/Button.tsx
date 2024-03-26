import { Pressable, PressableProps } from 'react-native';

type Props = PressableProps & {
  label: string;
};

export function Button({ label, ...rest }: Props) {
  return <Pressable>{label}</Pressable>;
}
