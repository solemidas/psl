/**
 * Provides style for the home screen
 */
import { Colors } from 'constants/colors';
import styled from 'styled-components/native';

interface ILeagueboardProps {
    size?: number;
}

export const LeagueBoard = styled.View`
    flex: 1;
    flex-direction: row;
    padding-horizontal: 15;
    padding-vertical: 15;
    background-color: ${Colors.blue};
    margin-top: 10;
    align-items: center;
`;

export const LeagueBoardColumn = styled.View`
    flex: ${({ size }: ILeagueboardProps) => size ? size : 1};
`;
