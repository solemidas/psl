/**
 * Provides the alert screen
 */
// tslint:disable:no-magic-numbers
import { ListItem } from 'components/listitem';
import { Section } from 'components/section';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { Platform, Switch } from 'react-native';
import { BallClubIcon } from 'theme/icons';
import { Centered, ScrollView } from 'theme/layout';
import { Medium, Regular } from 'theme/typography';

interface IProps {}
interface IState {
  actions: boolean;
  goal: boolean;
  match: boolean;
  notification: boolean;
}

const DRAWER_ICON_SIZE = 25;

export class AlertScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <BallClubIcon
        name="bell"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Alert</DrawerLabel>
    ),
    title: 'Alert',
  };

  public constructor(props: IProps) {
    super(props);
    this.state = {
      actions: true,
      goal: true,
      match: true,
      notification: true,
    };
    this.onNotiticationValueChange = this.onNotiticationValueChange.bind(this);
    this.onMatchNotiticationValueChange = this.onMatchNotiticationValueChange.bind(this);
    this.onGoalNotiticationValueChange = this.onGoalNotiticationValueChange.bind(this);
    this.onActionsNotiticationValueChange = this.onActionsNotiticationValueChange.bind(this);
  }

  public render() {
    return  (
      <ScrollView>
        {this.renderAlertsAndNotificationSection()}
        {this.renderMatchNotificationSection()}
        {this.renderNewsNotificationSection()}
      </ScrollView>
    );
  }

  private onActionsNotiticationValueChange(value: boolean) {
    this.setState({ actions: value });
  }

  private onGoalNotiticationValueChange(value: boolean) {
    this.setState({ goal: value });
  }

  private onMatchNotiticationValueChange(value: boolean) {
    this.setState({ match: value });
  }

  private onNotiticationValueChange(value: boolean) {
    this.setState({ notification: value });
  }

  private renderAlertsAndNotificationSection(): React.ReactNode {
    return (
      <Section>
          <Section.Header>App Notifications</Section.Header>
          <ListItem backgroundColor={Colors.white}>
            <ListItem.Item size={1} padding={15}>
              <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>
                Notifications & Alerts
              </Medium>
            </ListItem.Item>
            <ListItem.Item size={0.15} padding={15}>
              <Centered>
                <Switch
                  onValueChange={this.onNotiticationValueChange}
                  value={this.state.notification}
                  onTintColor={Colors.gold}
                  thumbTintColor={Platform.OS === 'ios' ? undefined : Colors.blue}
                />
              </Centered>
            </ListItem.Item>
          </ListItem>
        </Section>
    );
  }

  private renderMatchNotificationSection(): React.ReactNode {
    return(
      <Section>
        <Section.Header>Match Notifications</Section.Header>
        <ListItem backgroundColor={Colors.white}>
          <ListItem.Item size={1} padding={15}>
            <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>
              Match Updates
            </Medium>
            <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
              Kick-off, half time score and full-time score
            </Regular>
          </ListItem.Item>
          <ListItem.Item size={0.15} padding={15}>
            <Centered>
              <Switch
                onValueChange={this.onMatchNotiticationValueChange}
                value={this.state.match}
                onTintColor={Colors.gold}
                thumbTintColor={Platform.OS === 'ios' ? undefined : Colors.blue}
              />
            </Centered>
          </ListItem.Item>
        </ListItem>

        <ListItem backgroundColor={Colors.grey}>
          <ListItem.Item size={1} padding={15}>
            <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>
              Goals
            </Medium>
            <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
              As they go in
            </Regular>
          </ListItem.Item>
          <ListItem.Item size={0.15} padding={15}>
            <Centered>
              <Switch
                onValueChange={this.onGoalNotiticationValueChange}
                value={this.state.goal}
                onTintColor={Colors.gold}
                thumbTintColor={Platform.OS === 'ios' ? undefined : Colors.blue}
              />
            </Centered>
          </ListItem.Item>
        </ListItem>

        <ListItem backgroundColor={Colors.white}>
          <ListItem.Item size={1} padding={15}>
            <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>
              Match Action
            </Medium>
            <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
              Cape Town City team news and red cards
            </Regular>
          </ListItem.Item>
          <ListItem.Item size={0.15} padding={15}>
            <Centered>
              <Switch
                onValueChange={this.onActionsNotiticationValueChange}
                value={this.state.actions}
                onTintColor={Colors.gold}
                thumbTintColor={Platform.OS === 'ios' ? undefined : Colors.blue}
              />
            </Centered>
          </ListItem.Item>
        </ListItem>
      </Section>
    );
  }

  private renderNewsNotificationSection(): React.ReactNode {
    return (
      <Section>
        <Section.Header>News</Section.Header>
        <ListItem backgroundColor={Colors.grey}>
            <ListItem.Item size={1} padding={15}>
              <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>
                First Team News
              </Medium>
              <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
                Team news, post-match reaction and player signings
              </Regular>
            </ListItem.Item>
            <ListItem.Item size={0.15} padding={15}>
              <Centered>
                <Switch
                  onValueChange={this.onActionsNotiticationValueChange}
                  value={this.state.actions}
                  onTintColor={Colors.gold}
                  thumbTintColor={Platform.OS === 'ios' ? undefined : Colors.blue}
                />
              </Centered>
            </ListItem.Item>
          </ListItem>

          <ListItem backgroundColor={Colors.white}>
            <ListItem.Item size={1} padding={15}>
              <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>
                Club News
              </Medium>
              <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
                Get the latest from around the club
              </Regular>
            </ListItem.Item>
            <ListItem.Item size={0.15} padding={15}>
              <Centered>
                <Switch
                  onValueChange={this.onActionsNotiticationValueChange}
                  value={this.state.actions}
                  onTintColor={Colors.gold}
                  thumbTintColor={Platform.OS === 'ios' ? undefined : Colors.blue}
                />
              </Centered>
            </ListItem.Item>
          </ListItem>
      </Section>
    );
  }
}
