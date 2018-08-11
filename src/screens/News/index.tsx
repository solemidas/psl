/**
 * Provides the news screen
 */
import { Card } from 'components/card';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { INewsDataProps, news } from 'constants/mock';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { FlatList } from 'react-native';
import { BallClubIcon } from 'theme/icons';
import { Fill } from 'theme/layout';
import { Medium } from 'theme/typography';

interface IProps {}
interface IState {}

const DRAWER_ICON_SIZE = 25;

export class NewsScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <BallClubIcon
        name="news"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>News</DrawerLabel>
    ),
    title: 'News',
  };

  public render() {
    return  (
      <Fill>
        <FlatList
          data={news}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Fill>
    );
  }

  private keyExtractor = (item: INewsDataProps) => item.title;

  private renderItem = ({ item }: any) => (
    <Card>
      <Card.Image source={item.image} />
      <Card.Body>
        <Medium fontSize={Fonts.SIZE.h5} color={Colors.white}>{item.title}</Medium>
      </Card.Body>
    </Card>
  )
}
