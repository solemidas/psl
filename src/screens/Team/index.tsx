/**
 * Provides the team screen
 */
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'components/card';
import { ListItem } from 'components/listitem';
import { Section } from 'components/section';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { IPlayersProps, players } from 'constants/mock';
import { Dictionary, groupBy, reduce, upperCase } from 'lodash';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { SectionBase, SectionList, SectionListData } from 'react-native';
import { Fill } from 'theme/layout';
import { Medium } from 'theme/typography';

interface IProps {}
interface IState {}

type SectionType = SectionBase<IPlayersProps>;

const DRAWER_ICON_SIZE = 25;
const TENTH = 0.1;

export class TeamScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <FontAwesome
        name="soccer-ball-o"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Team</DrawerLabel>
    ),
    title: 'Team',
  };

  private squad: SectionType[];

  public constructor(props: IProps) {
      super(props);
      const data: Dictionary<IPlayersProps[]> = groupBy(players, (d) => d.position);
      this.squad = reduce(data, (acc: SectionType[], next, index) => {
          acc.push({ key: index, data: next });

          return acc;
      // tslint:disable-next-line:align
      }, []);
  }

  public render() {
    return  (
      <Fill>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeaderItem}
          sections={this.squad}
          keyExtractor={this.keyExtractor}
        />
      </Fill>
    );
  }

  private keyExtractor =  (item: IPlayersProps) => item.no;

  private renderHeaderItem = (info: { section: SectionListData<IPlayersProps> }) => (
    <Section.Header>
      {upperCase(info.section.key)}
    </Section.Header>
  )

  private renderItem = ({ item }: any) => (
    <Card>
      <Card.Image source={item.image} />
      <Card.Body>
        <ListItem>
          <ListItem.Item size={1}>
            <Medium fontSize={Fonts.SIZE.h4} color={Colors.gold}>{item.name}</Medium>
          </ListItem.Item>
          <ListItem.Item size={TENTH}>
            <Medium fontSize={Fonts.SIZE.h3} color={Colors.white}>{item.no}</Medium>
          </ListItem.Item>
        </ListItem>
      </Card.Body>
    </Card>
  )
}
