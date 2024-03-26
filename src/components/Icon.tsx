import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import MallMapsIconsSet from '@/lib/react-native-vector-icons/MallMapsIconsSet.json';

export enum Icons {
  check = 'check',
  shop = 'shop',
  loupe = 'loupe',
  arrow_right = 'arrow-right',
  cart = 'cart',
  user = 'user',
}

export const Icon = createIconSetFromIcoMoon(
  MallMapsIconsSet,
  'MallMapsIconsSet',
  'MallMapsIconsSet.ttf',
);
