/**
 * Provides layout components
 */
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Bold } from 'theme/typography';

export const Fill = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Centered = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ScrollView = styled.ScrollView`
    flex: 1;
    background-color: ${({ backgroundColor }: ViewStyle) => backgroundColor ? backgroundColor : Colors.transparent};
`;
