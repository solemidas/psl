/**
 * Provides the styles for the social links component
 */
import { Colors } from 'constants/colors';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;
// tslint:disable no-magic-numbers
const itemSize = windowWidth * (30 / 100);
const gutter = windowWidth * (3 / 100);

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    padding-horizontal: ${gutter / 2};
`;

export const Button = styled.TouchableOpacity`
    width: ${itemSize};
    height: ${itemSize};
    justify-content: center;
    align-items: center;
    background-color: ${Colors.blue};
    margin-top: ${gutter};
`;
