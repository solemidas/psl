/**
 * Provides a video component
 */
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from 'constants/colors';
import { WebBrowser } from 'expo';
import * as React from 'react';
import { ImageProps } from 'react-native';
import { Cover, Image, Play } from './styles';

export interface IVideoProps {
  image: ImageProps;
  uri: string;
}

const VIDEO_HEIGHT = 250;

const openVideoAsync = async (uri: string) => {
  const result = await WebBrowser.openBrowserAsync(uri);
};

export const VideoFx: React.SFC<IVideoProps> = (props: IVideoProps) => {
  const action = () => openVideoAsync(props.uri);
  const PLAY_ICON_SIZE = 30;
  const ACTIVE_OPACITY = 0.8;

  return (
    <Cover onPress={action} activeOpacity={ACTIVE_OPACITY}>
      <Image source={props.image} />
      <Play>
        <MaterialIcons
          name="play-circle-outline"
          size={PLAY_ICON_SIZE}
          color={Colors.gold}
        />
      </Play>
    </Cover>
  );
};
