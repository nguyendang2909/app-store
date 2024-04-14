import React from 'react';
import { StyleProp } from 'react-native';
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image';

type CacheImageProps = {
  url?: string;
  style: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
};

export const CacheImage: React.FC<CacheImageProps> = ({ url, style, resizeMode }) => {
  return (
    <FastImage
      style={style}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      // resizeMode={FastImage.resizeMode.contain}
      resizeMode={resizeMode}
    />
  );
};
