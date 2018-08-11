/**
 * Provides for navigation
 */
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { IDrawerItemProps } from 'navigation/types';
import styled from 'styled-components/native';
import { IFontStyleProps, Regular } from 'theme/typography';

const DRAWER_LABEL_SIZE = 18;

export const DrawerLabel = styled.Text`
    font-family: ${Fonts.FAMILY.medium};
    font-size: ${DRAWER_LABEL_SIZE};
    padding-vertical: 15;
    padding-horizontal: 15;
    color: ${({ tintColor }: IDrawerItemProps) => tintColor};
`;

export const ToggleButton = styled.TouchableOpacity`
    paddingLeft: 10
`;
