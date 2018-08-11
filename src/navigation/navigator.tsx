// tslint:disable file-name-casing
/**
 * Provides the root navigator
 */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { DrawerNavigator } from 'navigation/drawerNav';
import * as React from 'react';
import { TouchableOpacityProperties } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { ToggleButton } from './styles';

const MENU_ICON_SIZE = 30;

interface IHamburgerMenu {
  isDrawerOpen?: boolean;
}

const MenuButton: React.SFC<TouchableOpacityProperties & IHamburgerMenu> =
  ({ onPress, isDrawerOpen }) => (
  <ToggleButton onPress={onPress}>
    <MaterialCommunityIcons
      name={isDrawerOpen ? 'close' : 'menu'}
      size={MENU_ICON_SIZE}
      color={Colors.gold}
    />
  </ToggleButton>
);

const navOptions =  ({ navigation }: any) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;

  return {
    headerBackTitle: null,
    headerLeft: (
      <MenuButton
        onPress={navigation.toggleDrawer}
        isDrawerOpen={navigation.state.isDrawerOpen}
      />
    ),
    headerRight: null,
    headerStyle: {
      backgroundColor: Colors.blue,
      borderBottomColor: Colors.gold,
      borderBottomWidth: 5,
    },
    headerTitle,
    headerTitleStyle: {
      color: Colors.white,
      fontFamily: Fonts.FAMILY.medium,
      fontSize: Fonts.SIZE.h4,
    },
  };
};

export const RootNavigator = createStackNavigator({
  Navigator: {
    screen: DrawerNavigator,
  },
},
// tslint:disable-next-line:align
{
  navigationOptions: navOptions,
});
