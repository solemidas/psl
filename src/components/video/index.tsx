/**
 * Provides a video component
 */
import * as React from 'react';
import { EmbeddedVideo } from 'utils/embeddedVideo/Video';

export interface IVideoProps {
  uri: string;
}

const VIDEO_HEIGHT = 250;

export const VideoFx: React.SFC<IVideoProps> = (props: IVideoProps) => (
  <EmbeddedVideo
    source={{ uri: props.uri }}
    playerParams={{
      showinfo: 0,
    }}
    height={VIDEO_HEIGHT}
  />
);
