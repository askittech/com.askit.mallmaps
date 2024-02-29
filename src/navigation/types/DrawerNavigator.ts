import { DrawerScreenProps } from '@react-navigation/drawer';

export type DrawerNavigatorParamList = {
  Home: undefined;
};

export type DrawerNavigatorScreenProps<
  T extends keyof DrawerNavigatorParamList = keyof DrawerNavigatorParamList,
> = DrawerScreenProps<DrawerNavigatorParamList, T>;
