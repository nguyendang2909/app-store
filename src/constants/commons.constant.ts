export const SCREENS = {
  EditInfoHeight: 'EditInfoHeight',
  EditInfoNickname: 'EditInfoNickname',
  EditInfoWeight: 'EditInfoWeight',
  DATING_NEARBY_FILTER: 'DATING_NEARBY_FILTER',
  CREATE_BASIC_PROFILE: 'CREATE_BASIC_PROFILE',
  CREATE_BASIC_PHOTOS: 'CREATE_BASIC_PHOTOS',
  Home: 'Home',
  LikedMe: 'LikedMe',
  Main: 'Main',
  Messages: 'Messages',
  ProfileEdit: 'ProfileEdit',
  ProfileNearby: 'ProfileNearby',
  ProfileSetting: 'ProfileSetting',
  SelectRelationshipGoal: 'SelectRelationshipGoal',
  SignIn: 'SignIn',
  SignInWithOtpPhoneNumber: 'SignInWithOtpPhoneNumber',
  SignInWithPhoneNumber: 'SignInWithPhoneNumber',
  Welcome: 'Welcome',
  ChatProfile: 'ChatProfile',
  LikedMeProfile: 'LikedMeProfile',
  DATING_SWIPE_PROFILE: 'DATING_SWIPE_PROFILE',
  EDIT_INFO_LOCATION: 'EDIT_INFO_LOCATION',
  SUBJECTS: 'SUBJECTS',
  SUBJECT: 'SUBJECT',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
  CREATE_ORDER: 'CREATE_ORDER',
} as const;

export const HOME_SCREENS = {
  APP: 'APP',
  INSTALLED_APP: 'INSTALLED_APPS',
} as const;

export const AGES = {
  MIN: 18,
  MAX: 100,
};

export const APP_CATEGORY_LIST = [
  {
    id: 'giai_tri',
    name: 'Giải trí',
    apps: [
      {
        id: 'bong_ngo_tv',
        name: 'Bong Ngo TV',
        url: 'https://vdating-staging.s3.ap-southeast-1.amazonaws.com/apk/BongNgoTV_5.6.76_Apkpure.apk',
        icon: require('../../assets/app-icons/bong-ngo-tv.webp'),
      },
      {
        id: 'smarttube',
        name: 'Smartube',
        url: 'https://vdating-staging.s3.ap-southeast-1.amazonaws.com/apk/smarttube_stable.apk',
        icon: require('../../assets/app-icons/smarttube.webp'),
      },
      {
        id: 'smarttube_next',
        name: 'SmartTube Next',
        url: 'https://vdating-staging.s3.ap-southeast-1.amazonaws.com/apk/SmartTubeNext+Stable_20.36_Apkpure.apk',
        icon: require('../../assets/app-icons/smarttube-next.webp'),
      },
    ],
  },
  {
    id: 'am_nhac',
    name: 'Âm nhạc',
    apps: [],
  },
  {
    id: 'the_thao',
    name: 'Thể thao',
    apps: [],
  },
];
