/**
 * Provide the main navigator
 */

// tslint:disable object-literal-sort-keys
import { Colors } from 'constants/colors';
import { DrawerContent } from 'navigation/Drawer';
import * as React from 'react';
import { createDrawerNavigator, DrawerNavigatorConfig } from 'react-navigation';

import { AlertScreen } from 'screens/Alert';
import { FixturesScreen } from 'screens/Fixtures';
import { HomeScreen } from 'screens/Home';
import { TableScreen } from 'screens/LeagueTable';
import { NewsScreen } from 'screens/News';
import { PlayerScreen } from 'screens/Player';
import { SettingsScreen } from 'screens/Settings';
import { TeamScreen } from 'screens/Team';

const navigationOptions: DrawerNavigatorConfig = {
  contentComponent: (props: any) => < DrawerContent {...props} />,
  contentOptions: {
    activeTintColor: Colors.gold,
    inactiveTintColor: Colors.white,
    style: {
      backgroundColor: Colors.blue,
    },
  },
  drawerPosition: 'left',
};

export const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  News: {
    screen: NewsScreen,
  },
  Fixtures: {
    screen: FixturesScreen,
  },
  Team: {
    screen: TeamScreen,
  },
  Table: {
    screen: TableScreen,
  },
  Player: {
    screen: PlayerScreen,
  },
  Alerts: {
    screen: AlertScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
// tslint:disable-next-line:align
}, navigationOptions);
