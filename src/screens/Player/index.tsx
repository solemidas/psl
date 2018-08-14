/**
 * Provides the player screen
 */
import { Card } from 'components/card';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { IVideoDataProps, videos } from 'constants/mock';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { BallClubIcon } from 'theme/icons';
import { Fill } from 'theme/layout';
import { Medium, Regular } from 'theme/typography';

interface IProps {}
interface IState {}

const DRAWER_ICON_SIZE = 25;

export class PlayerScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <BallClubIcon
        name="media-play"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Player</DrawerLabel>
    ),
    title: 'Player',
  };

  public render() {
    return  (
      <Fill>
        <FlatList
          data={videos}
          style={{ ...StyleSheet.absoluteFillObject }}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Fill>
    );
  }

  private keyExtractor = (item: IVideoDataProps) => item.title;

  private renderItem = ({ item }: any) => (
    <Card>
      <Card.Video uri={item.url} image={item.image}/>
      <Card.Body>
        <Medium fontSize={Fonts.SIZE.h3} color={Colors.gold}>{item.title}</Medium>
        <Regular fontSize={Fonts.SIZE.medium} color={Colors.white}>{item.excerpt}</Regular>
      </Card.Body>
    </Card>
  )
}
