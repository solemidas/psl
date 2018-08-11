/**
 * Provides the settings screen
 */
import { Section } from 'components/section';
import { upperCase } from 'lodash';
import { DrawerLabel } from 'navigation/styles';
import { IDrawerItemProps } from 'navigation/types';
import * as React from 'react';
import { SectionBase, SectionList, SectionListData } from 'react-native';
import { BallClubIcon } from 'theme/icons';
import { Centered, Fill } from 'theme/layout';
import { Regular } from 'theme/typography';

import {
  Acknowledgements,
  DigitalMember,
  Feedback,
  Libraries,
  PrivacyPolicy
} from './sections';

interface ISettingsSectionsProps {
  data: React.ReactNode;
  key: string;
}

type SectionType = SectionBase<ISettingsSectionsProps>;

interface IProps {}
interface IState {
  sections: SectionType[];
}

const DRAWER_ICON_SIZE = 25;

export class SettingsScreen extends React.PureComponent<IProps, IState> {
  public static navigationOptions = {
    drawerIcon: ({ tintColor }: IDrawerItemProps) => (
      <BallClubIcon
        name="cog"
        size={DRAWER_ICON_SIZE}
        color={tintColor}
      />
    ),
    drawerLabel: ({ tintColor, focused }: IDrawerItemProps) => (
      <DrawerLabel tintColor={tintColor} focused={focused}>Settings</DrawerLabel>
    ),
    title: 'Settings',
  };

  public constructor(props: IProps) {
    super(props);
    const sections: SectionType[] = [
      {key: 'Digital Membership', data: <DigitalMember />},
      {key: 'Feedback', data: <Feedback />},
      {key: 'Acknowledgements', data: <Acknowledgements />},
      {key: 'Privacy Policy', data: <PrivacyPolicy />},
      {key: 'Code Libraries', data: <Libraries />},
    ];
    this.state = { sections };
  }

  public render() {
    const { sections } = this.state;

    return  (
      <Fill>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeaderItem}
          sections={sections}
          keyExtractor={this.keyExtractor}
        />
      </Fill>
    );
  }

  private keyExtractor =  (item: ISettingsSectionsProps) => item.key;

  private renderHeaderItem = (info: { section: SectionListData<ISettingsSectionsProps> }) => (
    <Section.Header>
      {upperCase(info.section.key)}
    </Section.Header>
  )

  private renderItem = ({ item }: any) => item.content;
}
