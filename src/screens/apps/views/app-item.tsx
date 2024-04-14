import RNApkInstaller from '@dominicvonk/react-native-apk-installer';
import { Button, ButtonText, HStack, Image, Text, View } from '@gluestack-ui/themed';
import { FC, useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import RNFS from 'react-native-fs';
import { v4 as uuidV4 } from 'uuid';

export const AppItem: FC<{
  app: {
    id: string;
    name: string;
    url: string;
    icon: any;
  };
}> = ({ app }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handlePress = async () => {
    setLoading(true);
    const filePath = RNFS.DocumentDirectoryPath + '/' + uuidV4() + '.apk';
    const download = RNFS.downloadFile({
      fromUrl: app.url,
      toFile: filePath,
      progress: res => {
        const currentPercent = +(res.bytesWritten / res.contentLength).toFixed(2) * 100;
        setPercent(currentPercent);
      },
      progressDivider: 1,
    });
    download.promise
      .then(result => {
        RNApkInstaller.install(filePath);
      })
      .finally(() => {
        setPercent(0);
        setLoading(false);
      });
  };

  return (
    <HStack flex={1} gap={16}>
      <View>
        <Image height={72} width={72} source={app.icon} borderRadius={16} alt={app.name} />
      </View>
      <View>
        <View columnGap={8} rowGap={8}>
          <Text>{app.name}</Text>
          {isLoading ? (
            <View height={10} width={10}>
              <CircularProgress
                radius={16}
                initialValue={0}
                showProgressValue={false}
                value={percent}
                activeStrokeColor={'#2465FD'}
                activeStrokeSecondaryColor={'#C25AFF'}
              />
            </View>
          ) : (
            <Button size="sm" onPress={handlePress}>
              <ButtonText>Update</ButtonText>
            </Button>
          )}
        </View>
      </View>
    </HStack>
  );
};
