import RNApkInstaller from '@dominicvonk/react-native-apk-installer';
import { Divider, HStack, ScrollView, StatusBar, Text, View } from '@gluestack-ui/themed';
import { Fragment, useEffect } from 'react';
import { useFetchStoreQuery } from 'src/api/app-store.api';
import { useAppSelector } from 'src/hooks';

import { AppItem } from './views/app-item';

export const AppScreen = () => {
  const checkInstallAppPermission = async () => {
    const permission = await RNApkInstaller.haveUnknownAppSourcesPermission();
    if (!permission) {
      RNApkInstaller.showUnknownAppSourcesPermission();
    }
  };

  const fetchStore = useFetchStoreQuery();

  const appCategories = useAppSelector(s => s.app.store.categories);

  useEffect(() => {
    checkInstallAppPermission();
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />

      <ScrollView px={16}>
        {appCategories.map(category => {
          return (
            <Fragment key={category.id}>
              <View pt={16}>
                <Text bold fontSize={28} lineHeight={34}>
                  {category.name}
                </Text>
              </View>
              <View py={16}>
                <HStack>
                  {category.apps.map(app => {
                    return <AppItem key={app.id} app={app} />;
                  })}
                </HStack>
              </View>
              <Divider />
            </Fragment>
          );
        })}
      </ScrollView>
    </>
  );
};
