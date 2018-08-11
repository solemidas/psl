/**
 * Provides the table screen
 */
import { FontAwesome } from '@expo/vector-icons';
import { Table } from 'components/table';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { ITeamProps, teams } from 'constants/mock';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Medium, Regular } from 'theme/typography';
import { Container, LeagueBoard, LeagueBoardColumn } from './styles';

interface IProps {}
interface IState {}

const DRAWER_ICON_SIZE = 25;
const THIRD = 0.3;

export class TableScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <FontAwesome
        name="table"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Table</DrawerLabel>
    ),
    title: 'Table',
  };

  public render() {
    return  (
      <Container>
        <LeagueBoard>
          <LeagueBoardColumn>
            <Medium color={Colors.white} fontSize={Fonts.SIZE.medium}>LEAGUE POSITION</Medium>
          </LeagueBoardColumn>
          <LeagueBoardColumn size={THIRD}>
            <Medium color={Colors.white} fontSize={Fonts.SIZE.h2} textAlign="right">2</Medium>
          </LeagueBoardColumn>
        </LeagueBoard>

        <Table>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={teams}
            renderItem={this.renderItem}
          />
        </Table>
      </Container>
    );
  }

  private keyExtractor = (item: ITeamProps) => item.name;

  private renderItem = ({ item }: any) => (
    <Table.Row>
      <Table.Column>
        <Regular>{item.pos}</Regular>
      </Table.Column>
      <Table.Column size={1}>
        <Regular>{item.name}</Regular>
      </Table.Column>
      <Table.Column>
        <Regular>0</Regular>
      </Table.Column>
      <Table.Column>
        <Regular>0</Regular>
      </Table.Column>
      <Table.Column>
        <Regular>0</Regular>
      </Table.Column>
    </Table.Row>
  )
}
