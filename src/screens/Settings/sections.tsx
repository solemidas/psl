/**
 * Provides various sections for the settings screen
 */
import { FontAwesome } from '@expo/vector-icons';
import { ListItem } from 'components/listitem';
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import * as React from 'react';
import { View } from 'react-native';
import { Centered } from 'theme/layout';
import { Medium, Regular } from 'theme/typography';

// tslint:disable:no-magic-numbers
// tslint:disable: max-line-length

export const DigitalMember = () => (
  <ListItem>
    <ListItem.Item size={1} padding={15}>
      <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>Log In</Medium>
    </ListItem.Item>
    <ListItem.Item size={0.15} padding={15}>
      <Centered>
        <FontAwesome name="chevron-right" size={16} color={Colors.gold} />
      </Centered>
    </ListItem.Item>
  </ListItem>
);

export const PrivacyPolicy = () => (
  <ListItem>
    <ListItem.Item size={1} padding={15}>
      <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>Privacy Policy</Medium>
    </ListItem.Item>
    <ListItem.Item size={0.15} padding={15}>
      <Centered>
        <FontAwesome name="chevron-right" size={16} color={Colors.gold} />
      </Centered>
    </ListItem.Item>
  </ListItem>
);

export const Feedback = () => (
  <View>
    <ListItem>
      <ListItem.Item size={1} padding={15}>
        <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>Feedback</Medium>
      </ListItem.Item>
      <ListItem.Item size={0.15} padding={15}>
        <Centered>
          <FontAwesome name="chevron-right" size={16} color={Colors.gold} />
        </Centered>
      </ListItem.Item>
    </ListItem>

    <ListItem backgroundColor={Colors.grey}>
      <ListItem.Item size={1} padding={15}>
        <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>Review App</Medium>
      </ListItem.Item>
      <ListItem.Item size={0.15} padding={15}>
        <Centered>
          <FontAwesome name="chevron-right" size={16} color={Colors.gold} />
        </Centered>
      </ListItem.Item>
    </ListItem>
  </View>
);

export const Acknowledgements = () => (
  <View>
    <ListItem>
      <ListItem.Item size={1} padding={15}>
        <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
          The Cape Town City app was created by Cape Town City football club and developed by other media
        </Regular>
      </ListItem.Item>
    </ListItem>
    <ListItem backgroundColor={Colors.grey}>
      <ListItem.Item size={1} padding={15}>
        <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>Cape Town City Website</Medium>
      </ListItem.Item>
      <ListItem.Item size={0.15}>
        <Centered>
          <FontAwesome name="chevron-right" size={16} color={Colors.gold} />
        </Centered>
      </ListItem.Item>
    </ListItem>
    <ListItem>
      <ListItem.Item size={1} padding={15}>
        <Medium color={Colors.black} fontSize={Fonts.SIZE.medium}>Other Media Website</Medium>
      </ListItem.Item>
      <ListItem.Item size={0.15}>
        <Centered>
          <FontAwesome name="chevron-right" size={16} color={Colors.gold} />
        </Centered>
      </ListItem.Item>
    </ListItem>
  </View>
);

const date = new Date();

export const Libraries = () => (
  <ListItem>
    <ListItem.Item size={1} padding={15}>
      <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
        Copyright {date.getFullYear()} AirlitCo PTY(LTD). All rights Reserved.
      </Regular>
      <Regular color={Colors.black} fontSize={Fonts.SIZE.medium}>
        This app uses third party services such as google analytics, segment analytics and other similar services to collect usage data, including personally identifiable information such as personal details, device identifier, or location. The data collected helps us to enhance your experience  using the app and allows us to provide you with more relevant content.
      </Regular>
    </ListItem.Item>
  </ListItem>
);
