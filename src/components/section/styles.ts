/**
 * Provides style for the section component
 */
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import styled from 'styled-components/native';
import { Medium } from 'theme/typography';

export const Container = styled.View`
    align-self: stretch;
    margin-bottom: 10;
`;

export const Title = Medium.extend`
    color: ${Colors.white};
    font-size: ${Fonts.SIZE.h4};
`;

export const Content = styled.View`
`;

export const HeaderContainer = styled.View`
    background-color: ${Colors.blue};
    padding-vertical: 15;
    padding-horizontal: 15;
    border-bottom-color: ${Colors.gold};
    border-bottom-width: 5
`;
