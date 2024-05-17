import { Image } from 'react-native-image-crop-picker';

import { AuthGrantType, DevicePlatform, OrderStatus } from './data.type';

export declare namespace ApiRequest {
  type FindAll = {
    fields?: string[];
  };

  type Pagination = {
    _next?: string;
    // _prev?: string;
  };

  type FindMany<T> = Pagination & T;

  type IsExistUser = {
    phoneNumber: string;
  };

  type SignIn = {
    grantType: AuthGrantType;
    token?: string;
  };

  type SignInWithGoogle = {
    token: string;
  };

  type SignInWithFacebook = {
    token: string;
  };

  type SignInWithApple = {
    token: string;
  };

  type LoginByEmail = {
    email: string;
    password: string;
  };

  type LoginByGoogle = {
    token: string;
  };

  type LoginByFacebook = {
    token: string;
  };

  type LoginByPhoneNumber = {
    token: string;
  };

  type Logout = {
    refreshToken: string;
  };

  type RefreshAccessToken = {
    refreshToken: string;
  };

  type CreateMe = {
    email?: string;
    shopTitle?: string;
  };

  type SearchUsersNearby = Pagination;

  type UploadPhoto = {
    file: Image;
  };

  type FindManyConversations = Pagination;

  type FindManyMessages = FindMany<{ matchId: string }>;

  type FindManySwipeProfiles = FindMany<object>;

  type FindManyMatches = Pagination;

  type FindManyNearbyProfiles = Pagination & {
    longitude?: number;
    latitude?: number;
  };

  type FindManyNextSwipeProfiles = Pagination;

  type CreateProduct = {
    title: string;
    imageIds?: string[];
    price: number;
    capitalPrice?: number;
    promotionalPrice?: number;
    wholesalePrice?: number;
    minWholesalePriceQuantity?: number;
    sku?: string;
    barcode?: string;
    stockTrackingMethod?: StockTrackingMethod;
    isInStock?: boolean;
    stock?: number;
    description?: string;
    label?: string;
    unit?: string;
  };

  type UpdateProduct = {};

  type CreateCustomer = {
    fullName: string;
    phoneCode?: string;
    phoneNumber?: string;
  };

  type UpdateCustomer = Partial<CreateCustomer>;

  type CreateCategory = {
    title: string;
  };

  type UpdateCategory = Partial<CreateCategory>;

  type FindAllCustomers = {
    searchText?: string;
  };

  type CreateOrderItem = { productId: string; quantity: number };

  type CreateOrder = {
    status: OrderStatus;
    paymentMethod?: string;
    deliveryMethod?: string;
    items: CreateOrderItem[];
  };

  type SendView = {
    targetUserId: string;
  };

  type FindAllProducts = {
    searchText?: string;
    categoryId?: string;
  };

  type FindManyProducts = FindAllProducts & Pagination;

  type FindAllCategories = {
    title?: string;
  };

  type FindManyCategories = Pagination & FindAllCategories;

  type FindManyShops = Pagination;

  type FindAllOrders = {};

  type FindManyOrders = FindAllOrders & Pagination;

  type CreateMatch = {
    targetUserId: string;
  };

  type UpdateSignedDevice = {
    refreshToken: string;
    deviceToken: string;
    devicePlatform: DevicePlatform;
  };
}

export declare namespace ApiResponse {
  export type App = {
    bundleId?: string;
    iconUrl: string;
    id: string;
    name: string;
    url: string;
  };

  export type AppCategory = {
    apps: App[];
    id: string;
    name: string;
  };

  export type AppStore = { version: string; url: string; categories: AppCategory[] };
}
