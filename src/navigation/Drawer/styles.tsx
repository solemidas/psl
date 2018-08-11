/**
 * Provides style for the drawer
 */
import { Colors } from 'constants/colors';
import styled from 'styled-components/native';

export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${Colors.blue};
`;

export const Brand = styled.View`
    margin-top: 30;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 120;
    height: 120;
    resize-mode: contain;
`;
