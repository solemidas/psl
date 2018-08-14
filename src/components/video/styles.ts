/**
 * Provides the style for the video
 */
import { Colors } from 'constants/colors';
import styled from 'styled-components/native';

export const Cover = styled.TouchableOpacity`
    align-self: stretch;
    height: 250;
    position: relative;
`;

export const Image = styled.Image`
    flex: 1;
    resize-mode: cover;
    width: null;
    height: null;
`;

export const Play = styled.View`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50;
    width: 50;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.blue};
`;
