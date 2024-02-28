import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DrawerParamList = {
  Home: undefined;
};

export type DrawerScreenProps<T extends keyof DrawerParamList> =
  DrawerNavigationProp<DrawerParamList, T>;
