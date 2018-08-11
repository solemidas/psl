/**
 * Provides the fixtures screen
 */
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { BallClubIcon } from 'theme/icons';
import { Centered, Fill } from 'theme/layout';
import { Regular } from 'theme/typography';

interface IProps {}
interface IState {}

const DRAWER_ICON_SIZE = 25;

export class FixturesScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <BallClubIcon
        name="calender"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Fixtures</DrawerLabel>
    ),
    title: 'Fixtures',
  };

  public render() {
    return  (
      <Fill>
        <Centered>
          <Regular>Fixtures Screen</Regular>
        </Centered>
      </Fill>
    );
  }
}
