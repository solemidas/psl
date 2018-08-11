/**
 * Provides the style for the list component
 */
import { Colors } from 'constants/colors';
import styled from 'styled-components/native';
import { DirectionType, IItemProps, IListItemProps } from './types';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: ${({ backgroundColor }: IListItemProps) => backgroundColor ? backgroundColor : Colors.transparent};
`;

export const Item = styled.View`
	flex: ${({ size }: IItemProps) => size ? size : 1};
	padding-vertical: ${({ padding }: IItemProps) => padding ? padding : 0};
	padding-horizontal: ${({ padding }: IItemProps) => padding ? padding : 0};
`;
