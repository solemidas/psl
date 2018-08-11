/**
 * Provides the a card component
 */
import { IVideoProps, VideoFx } from 'components/video';
import * as React from 'react';
import { ImageProps } from 'react-native';
import { Body, Content, Cover, Image } from './styles';

interface IProps {
  children?: any;
}

interface IState {}

export class Card extends React.PureComponent<IProps, IState> {
  public static Body = (props: any) => <Body {...props} />;
  public static Image = (props: ImageProps) => (
    <Cover>
      <Image {...props} />
    </Cover>
  )
  public static Video = (props: IVideoProps) => <VideoFx {...props} />;

  public constructor(props: IProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <Content>
        {this.props.children}
      </Content>
    );
  }
}
