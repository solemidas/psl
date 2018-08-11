/**
 * Provides types for the video component
 */
import { ImageProps, ViewStyle } from 'react-native';

export interface ISourceProps {
  uri: string;
}

export interface IEmbedVideoProps {
  containerStyle?: ViewStyle;
  height?: number;
  playerParams: object;
  poster?: string | undefined;
  source: ISourceProps;
  width?: number;
}
