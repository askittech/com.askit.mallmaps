import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import IconsSet from '@/config/IconsSet.json';

export enum Icons {
  check = 'check',
  shop = 'shop',
  loupe = 'loupe',
  arrow_right = 'arrow-right',
}

export const Icon = createIconSetFromIcoMoon(IconsSet);
