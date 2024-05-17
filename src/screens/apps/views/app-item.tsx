import RNApkInstaller from '@dominicvonk/react-native-apk-installer';
import { Button, ButtonText, HStack, Image, Text, View } from '@gluestack-ui/themed';
import { FC, useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import RNFS from 'react-native-fs';
import Toast from 'react-native-toast-message';
import Config from 'src/config';
import { ApiResponse } from 'src/types';
import { v4 as uuidV4 } from 'uuid';

export const AppItem: FC<{
  app: ApiResponse.App;
}> = ({ app }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  // const [isInstalled, setInstalled] = useState<boolean | null>(null);

  // const openApp = () => {
  //   console.log(111);
  //   Linking.openURL('vnd.youtube://');
  // };

  // const check = useCallback(async () => {
  //   try {
  //     await SharedGroupPreferences.isAppInstalledAndroid(app.id);
  //     setInstalled(true);
  //   } catch (e) {
  //     setInstalled(false);
  //   }
  // }, [app.id]);

  // useEffect(() => {
  //   check();
  // }, [check]);

  // useEffect(() => {
  //   Linking.canOpenURL('com.studio.a')
  //     .then(() => {
  //       console.log(44444);
  //     })
  //     .catch(err => {
  //       console.log(55555);
  //     });
  // }, []);

  const handlePress = async () => {
    setLoading(true);
    const filePath = RNFS.DocumentDirectoryPath + '/' + uuidV4() + '.apk';
    const download = RNFS.downloadFile({
      fromUrl: Config.STORAGE_BASE_URL + '/' + app.url,
      toFile: filePath,
      progress: res => {
        const currentPercent = +(res.bytesWritten / res.contentLength).toFixed(2) * 100;
        setPercent(currentPercent);
      },
      progressDivider: 1,
    });
    download.promise
      .then(result => {
        if (result.statusCode >= 400) {
          Toast.show({ text1: 'Lỗi khi tải, vui lòng thử lại' });
          return;
        }
        RNApkInstaller.install(filePath);
      })
      .finally(() => {
        setPercent(0);
        setLoading(false);
      });
  };

  return (
    <HStack flex={1} gap={8}>
      <View>
        <Image
          height={72}
          width={72}
          source={`${Config.STORAGE_BASE_URL}/${app.iconUrl}`}
          borderRadius={16}
          alt={app.name}
        />
      </View>
      <View>
        <View columnGap={8} rowGap={8}>
          <Text>{app.name}</Text>
          <HStack rowGap={8} columnGap={8} alignItems="center">
            {isLoading ? (
              <CircularProgress
                radius={14}
                initialValue={0}
                showProgressValue={false}
                value={percent}
                activeStrokeColor={'#2465FD'}
                activeStrokeSecondaryColor={'#C25AFF'}
              />
            ) : (
              <Button size="sm" onPress={handlePress}>
                <ButtonText>Cài đặt</ButtonText>
              </Button>
            )}
          </HStack>
        </View>
      </View>
    </HStack>
  );
};
