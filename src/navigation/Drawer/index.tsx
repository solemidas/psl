/**
 * Provides the drawer component
 */
import { Images } from 'constants/assets';
import * as React from 'react';
import { DrawerItems } from 'react-navigation';
import { Brand, Content, Logo } from './styles';

export const DrawerContent: React.SFC<any> = (props) => (
  <Content>
    <Brand>
      <Logo source={Images.logo} />
    </Brand>
    <DrawerItems {...props} />
  </Content>
);
