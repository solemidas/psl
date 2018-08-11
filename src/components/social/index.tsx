/**
 * Provides the social links components
 */
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'constants/colors';
import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Container } from './styles';

export enum SocialTypes {
  FACEBOOK = 'facebook-official',
  TWITTER = 'twitter',
  GOOGLE = 'google-plus',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube-play',
  SOUNDCLOUD = 'soundcloud',
}

interface ISocialLink {
  platform: SocialTypes;
}

interface ISocialProps {
  children?: any;
}

const SOCIAL_ICON_SIZE = 40;
const ACTIVE_OPACITY = 0.7;

const Link: React.SFC<ISocialLink> = (props: ISocialLink & TouchableOpacityProps) => (
  <Button activeOpacity={ACTIVE_OPACITY} onPress={props.onPress}>
    <FontAwesome name={props.platform} color={Colors.gold} size={SOCIAL_ICON_SIZE} />
  </Button>
);

export class Social extends React.PureComponent<ISocialProps, {}> {
  public static Link = (props: ISocialLink) => <Link {...props} />;

  public render(): React.ReactNode {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
