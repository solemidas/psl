// tslint:disable file-name-casing
/**
 * Provides the embeded Video component
 */
import * as React from 'react';
import { View, WebView } from 'react-native';
import { IEmbedVideoProps, ISourceProps } from './types';
import { VideoSourceReader } from './VideoSourceReader';

const createSourceObject = (source: ISourceProps, playerParams: object, poster: string | undefined) => {
    const sourceReader = new VideoSourceReader(source.uri, playerParams);
    const url = sourceReader.getUrl();

    if (sourceReader.isEmbeddableVideo()) {
      return {
        uri: url,
      };
    }

    const HTML = `
      <video width="100%" height="auto" poster="${poster}" controls>
        <source src="${url}" >
      </video>
    `;

    return { html: HTML };
};

/**
 * Renders a Video based on the source type
 * if source is an url to a web player the
 * it is displayed in a WebView, if not
 * a Video HTML element is displayed in the
 * WebView.
 *
 * @returns {*}
 */
export class EmbeddedVideo extends React.PureComponent<IEmbedVideoProps, {}> {
    public render() {
      const {
        width,
        height,
        source,
        containerStyle,
        playerParams,
        poster,
      } = this.props;

      return (
        <View style={containerStyle}>
          <WebView
            style={{ width, height }}
            source={createSourceObject(source, playerParams, poster)}
            scrollEnabled={false}
          />
        </View>
      );
    }
}
