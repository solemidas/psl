/**
 * Provides font components
 */
import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import styled from 'styled-components/native';

export interface IFontStyleProps {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const Regular = styled.Text`
  font-family: ${({ fontFamily }: IFontStyleProps) => fontFamily || Fonts.FAMILY.regular};
  font-size: ${({ fontSize }: IFontStyleProps) => fontSize || Fonts.SIZE.regular};
  color: ${({ color }: IFontStyleProps) => color || Colors.black};
  textAlign: ${({ textAlign }: IFontStyleProps) => textAlign || 'left'};
`;

export const Medium = Regular.extend`
  font-family: ${Fonts.FAMILY.medium};
`;

export const Bold = Regular.extend`
  font-family: ${Fonts.FAMILY.bold};
`;
