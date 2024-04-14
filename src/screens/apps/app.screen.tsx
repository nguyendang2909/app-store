import { Button, ButtonText, StatusBar, Text } from '@gluestack-ui/themed';
import { useState } from 'react';
import { NativeModules } from 'react-native';
import RNFS from 'react-native-fs';
import { Header } from 'src/components';

export const AppScreen = () => {
  const [percent, setPercent] = useState<number>(0);
  const handlePress = async () => {
    const filePath = RNFS.DocumentDirectoryPath + '/com.domain.example.apk';

    const download = RNFS.downloadFile({
      fromUrl:
        'https://vdating-staging.s3.ap-southeast-1.amazonaws.com/apk/BongNgoTV_5.6.76_Apkpure.apk',
      toFile: filePath,
      progress: res => {
        console.log((res.bytesWritten / res.contentLength).toFixed(2));
      },
      progressDivider: 1,
    });
    download.promise.then(result => {
      console.log(1111);
      NativeModules.InstallApk.install(filePath);
    });
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <Header
        title="Sản phẩm"
        // rightIcon="settings"
        // onRightPress={() => {
        //   navigate.navigate(SCREENS.DATING_NEARBY_FILTER);
        // }}
      />
      <Text> {percent}</Text>
      <Button onPress={handlePress}>
        <ButtonText>Download</ButtonText>
      </Button>
    </>
  );
};
