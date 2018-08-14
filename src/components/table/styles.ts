/**
 * Provides styles for the table
 */
import { Colors } from 'constants/colors';
import styled from 'styled-components/native';

interface IColumnStyleProps {
    children?: any;
    size?: number;
}

interface IRowStyleProps {
    active?: boolean;
    children?: any;
}

const COLUMN_DEFAULT_SIZE = 0.2;

export const Container = styled.View`
    flex: 1
`;

export const Header = styled.View`
    flex-direction: row;
    background-color: ${Colors.gold};
    border-bottom-color: #DDD;
    border-bottom-width: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Column = styled.View`
  flex: ${({size}: IColumnStyleProps) => size ? size : COLUMN_DEFAULT_SIZE};
  padding-vertical: 15;
  padding-horizontal: 10;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${({ active }: IRowStyleProps) => active ? '#F1F1F1' :  Colors.white};
  border-bottom-color: #DDD;
  border-bottom-width: 1;
`;
