// tslint:disable file-name-casing
/**
 *
 * Provides a video source reader for embed videos
 */
// tslint:disable no-magic-numbers
import { stringify } from 'qs';

const getYouTubeVideoId = (url: string): boolean | string => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[7].length === 11) {
      return match[7];
    }

    return false;
};

const getVimeoVideoId = (url: string): boolean | string => {
  // tslint:disable-next-line:max-line-length
  const regExp = /https?:\/\/(?:[\w]+\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/; // eslint-disable-line max-len
  const match = url.match(regExp);

  if (match && match[3]) {
    return match[3];
  }

  return false;
};

const getYouTubeEmbedUrl = (id: string | boolean, playerParams: object): string => {
  const serializedParams = stringify(playerParams);

  return `https://www.youtube.com/embed/${id}?${serializedParams}`;
};

const getVimeoEmbedUrl = (id: string | boolean): string =>
  `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;

/**
 * Reads the video source and provides the video
 * url in embedded form if necessary
 */
export class VideoSourceReader {
  private isVimeo: boolean;
  private isYouTube: boolean;
  private playerParams: object;
  private source: string;

  public constructor(source: string, playerParams: object) {
    this.source = source;
    this.playerParams = playerParams;
    this.isYouTube = !!getYouTubeVideoId(source);
    this.isVimeo = !!getVimeoVideoId(source);
  }

  public getUrl() {
    if (this.isYouTube) {
      return getYouTubeEmbedUrl(getYouTubeVideoId(this.source), this.playerParams);
    } else if (this.isVimeo) {
      return getVimeoEmbedUrl(getVimeoVideoId(this.source));
    }

    return this.source;
  }

  public isEmbeddableVideo() {
    return this.isYouTube || this.isVimeo;
  }
}
