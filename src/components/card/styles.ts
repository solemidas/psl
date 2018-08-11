/**
 * Provides styled for the card component
 */
import { Colors } from 'constants/colors';
import styled from 'styled-components/native';

export const Content = styled.View`
`;

export const Cover = styled.View`
    align-self: stretch;
    height: 350;
`;

export const Body = styled.View`
    padding-vertical: 15;
    padding-horizontal: 15;
    background-color: ${Colors.blue};
    border-bottom-width: 5;
    border-bottom-color: ${Colors.gold};
`;

export const Image = styled.Image`
    flex: 1;
    resize-mode: cover;
    width: null;
    height: null;
`;
