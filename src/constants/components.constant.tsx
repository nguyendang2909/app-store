import { FC } from 'react';
import { AppScreen, Management } from 'src/screens/apps/app.screen';
import { InstalledAppScreen } from 'src/screens/installed-apps/installed-app.screen';
import { BottomNavigatorName, HomeTabParamList } from 'src/types';

import { BOTTOM_NAVIGATOR_NAMES, PRODUCT_SORT_TYPES } from './constants';
import { NAVIGATION_ICONS } from './icons.constant';

export const DEFAULT_NAVIGATOR: {
  id: string;
  name: keyof HomeTabParamList;
  title: string;
  screen: FC;
  icon: FC;
  isShow: true;
}[] = [
  {
    id: 'APP',
    name: 'APP',
    title: 'Quản lý',
    screen: Management,
    icon: NAVIGATION_ICONS.ORDER,
    isShow: true,
  },
];

export const NAVIGATOR_DATA: Record<
  BottomNavigatorName,
  {
    id: string;
    name: keyof HomeTabParamList;
    title: string;
    screen: FC;
    icon: FC;
    isShow: boolean;
  }
> = {
  APP: {
    id: BOTTOM_NAVIGATOR_NAMES.APP,
    name: BOTTOM_NAVIGATOR_NAMES.APP,
    title: 'Apps',
    screen: AppScreen,
    icon: NAVIGATION_ICONS.PRODUCT,
    isShow: false,
  },
  INSTALLED_APP: {
    id: BOTTOM_NAVIGATOR_NAMES.INSTALLED_APP,
    name: BOTTOM_NAVIGATOR_NAMES.INSTALLED_APP,
    title: 'Đã cài',
    screen: InstalledAppScreen,
    icon: NAVIGATION_ICONS.PRODUCT,
    isShow: false,
  },
} as const;

export const PRODUCT_SORT_TYPE_DATA = [
  {
    id: PRODUCT_SORT_TYPES.CUSTOM,
    type: PRODUCT_SORT_TYPES.CUSTOM,
    title: 'Tuỳ chỉnh',
  },
  {
    id: PRODUCT_SORT_TYPES.IN_STOCK_ASC,
    type: PRODUCT_SORT_TYPES.IN_STOCK_ASC,
    title: 'Còn hàng từ A -> Z',
  },
  {
    id: PRODUCT_SORT_TYPES.IN_STOCK_DESC,
    type: PRODUCT_SORT_TYPES.IN_STOCK_DESC,
    title: 'Còn hàng từ Z -> A',
  },
  {
    id: PRODUCT_SORT_TYPES.TITLE_ASC,
    type: PRODUCT_SORT_TYPES.TITLE_ASC,
    title: 'Từ A -> Z',
  },
  {
    id: PRODUCT_SORT_TYPES.TITLE_DESC,
    type: PRODUCT_SORT_TYPES.TITLE_DESC,
    title: 'Từ Z -> A',
  },
  {
    id: PRODUCT_SORT_TYPES.PRICE_ASC,
    type: PRODUCT_SORT_TYPES.PRICE_ASC,
    title: 'Giá từ thấp đến cao',
  },
  {
    id: PRODUCT_SORT_TYPES.PRICE_DESC,
    type: PRODUCT_SORT_TYPES.PRICE_DESC,
    title: 'Giá từ cao đến thấp',
  },
  {
    id: PRODUCT_SORT_TYPES.NEWEST,
    type: PRODUCT_SORT_TYPES.NEWEST,
    title: 'Mới nhất',
  },
  {
    id: PRODUCT_SORT_TYPES.OLDEST,
    type: PRODUCT_SORT_TYPES.OLDEST,
    title: 'Cũ nhất',
  },
];
