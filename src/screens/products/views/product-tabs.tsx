import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { useAppDispatch } from 'src/hooks';
import { setSearchProducts } from 'src/store/cache';

import { InstalledApps } from './category-tab/category-tab';
import { CategoryTabHeader } from './headers/CategoryTabHeader';
import { ProductTabHeader } from './headers/ProductTabHeader';
import { FeatureApps } from './product-tab/product-tab';
import { TabBarProductScreen } from './product-tab-bar';

const Tab = createMaterialTopTabNavigator();

export const ProductTabs = () => {
  const layout = useWindowDimensions();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchProducts(false));
  }, [dispatch]);

  return (
    <>
      <Tab.Navigator
        initialLayout={{ width: layout.width }}
        tabBar={props => {
          return <TabBarProductScreen {...props} headers={[ProductTabHeader, CategoryTabHeader]} />;
        }}
      >
        <Tab.Screen
          name="product"
          component={FeatureApps}
          // options={{ tabBarLabel: 'Sản phẩm' }}
        />
        <Tab.Screen
          name="category"
          component={InstalledApps}
          // options={{ tabBarLabel: 'Danh mục' }}
        />
      </Tab.Navigator>
    </>
  );
};
