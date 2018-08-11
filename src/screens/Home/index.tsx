/**
 * Provides the home screen
 */
import { Card } from 'components/card';
import { Section } from 'components/section';
import { Social, SocialTypes } from 'components/social';
import { Table } from 'components/table';
import { Images } from 'constants/assets';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BallClubIcon } from 'theme/icons';
import { Medium, Regular } from 'theme/typography';
import { LeagueBoard, LeagueBoardColumn } from './styles';

interface IProps {}
interface IState {}

const DRAWER_ICON_SIZE = 25;
const THIRD = 0.3;

const teams = [
  {pos: 1, team: 'Bidvest Wits', p: 0, gd: 0, pts: 0},
  {pos: 2, team: 'Cape Town City', p: 0, gd: 0, pts: 0, active: true},
  {pos: 3, team: 'Supersport United', p: 0, gd: 0, pts: 0},
];

export class HomeScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <BallClubIcon
        name="home-outline"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Home</DrawerLabel>
    ),
    title: 'Home!',
  };

  public render() {
    return  (
      <ScrollView
        style={{ ...StyleSheet.absoluteFillObject }}
      >
        <Section>
          <Section.Header>PREMIER LEAGUE</Section.Header>
          <Section.Content>
            <LeagueBoard>
              <LeagueBoardColumn>
                <Medium color={Colors.white} fontSize={Fonts.SIZE.medium}>LEAGUE POSITION</Medium>
              </LeagueBoardColumn>
              <LeagueBoardColumn size={THIRD}>
                <Medium color={Colors.white} fontSize={Fonts.SIZE.h2} textAlign="right">2</Medium>
              </LeagueBoardColumn>
            </LeagueBoard>
            <Table>
              {teams.map((item) => (
                <Table.Row key={item.pos} active={item.active}>
                  <Table.Column>
                    <Regular>{item.pos}</Regular>
                  </Table.Column>
                  <Table.Column size={1}>
                    <Regular>{item.team}</Regular>
                  </Table.Column>
                  <Table.Column>
                    <Regular>{item.p}</Regular>
                  </Table.Column>
                  <Table.Column>
                    <Regular>{item.gd}</Regular>
                  </Table.Column>
                  <Table.Column>
                    <Regular>{item.pts}</Regular>
                  </Table.Column>
                </Table.Row>
              ))}
            </Table>
          </Section.Content>
        </Section>

        <Section>
          <Section.Header>LATEST NEWS</Section.Header>
          <Section.Content>
            <Card>
              <Card.Image source={Images.news2} />
              <Card.Body>
                <Medium fontSize={Fonts.SIZE.medium} color={Colors.white}>
                  Cape Town City announces news signings
                </Medium>
              </Card.Body>
            </Card>
          </Section.Content>
        </Section>

        <Section>
          <Section.Header>LATEST TEAM INFO</Section.Header>
          <Section.Content>
            <Card>
              <Card.Image source={Images.player10} />
              <Card.Body>
                <Medium fontSize={Fonts.SIZE.h3} color={Colors.gold}>Teko</Medium>
                <Medium fontSize={Fonts.SIZE.h3} color={Colors.white}>Modise</Medium>
              </Card.Body>
            </Card>
          </Section.Content>
        </Section>

        <Section>
          <Section.Header>SEASON TOP SCORER</Section.Header>
          <Section.Content>
            <Card>
              <Card.Image source={Images.player26} />
              <Card.Body>
                <Medium fontSize={Fonts.SIZE.h3} color={Colors.gold}>Lehlohonolo</Medium>
                <Medium fontSize={Fonts.SIZE.h3} color={Colors.white}>Majoro</Medium>
              </Card.Body>
            </Card>
          </Section.Content>
        </Section>

        <Section>
          <Section.Header>CONNECT WITH US</Section.Header>
          <Section.Content>
            <Social>
              <Social.Link platform={SocialTypes.FACEBOOK} />
              <Social.Link platform={SocialTypes.TWITTER} />
              <Social.Link platform={SocialTypes.GOOGLE} />
              <Social.Link platform={SocialTypes.INSTAGRAM} />
              <Social.Link platform={SocialTypes.YOUTUBE} />
              <Social.Link platform={SocialTypes.SOUNDCLOUD} />
            </Social>
          </Section.Content>
        </Section>
      </ScrollView>
    );
  }
}
