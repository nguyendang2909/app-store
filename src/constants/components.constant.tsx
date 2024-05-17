import { FC } from 'react';
import { AppScreen } from 'src/screens/apps/app.screen';
import { HomeTabParamList } from 'src/types';

import { BOTTOM_NAVIGATOR_NAMES } from './constants';
import { NAVIGATION_ICONS } from './icons.constant';

export const NAVIGATOR_DATA: Record<
  string,
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
} as const;
