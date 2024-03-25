import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DrawerNavigatorParamList } from './DrawerNavigator';

export type NativeStackNavigatorParamList = {
  DrawerNavigator: NavigatorScreenParams<DrawerNavigatorParamList>;
  UserProfile: { id: number };
};

export type NativeStackNavigatorScreenProps<
  T extends
    keyof NativeStackNavigatorParamList = keyof NativeStackNavigatorParamList,
> = NativeStackScreenProps<NativeStackNavigatorParamList, T>;
