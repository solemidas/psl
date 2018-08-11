/**
 * Provides the table component
 */
import { Colors } from 'constants/colors';
import * as React from 'react';
import { Bold } from 'theme/typography';
import {
  Column,
  Container,
  Content,
  Header,
  Row,
} from './styles';
import { IColumnStyleProps, IRowStyleProps, ITableProps } from './types';

interface IState {}

export class Table extends React.PureComponent<ITableProps, IState> {
  public static Column = (props: IColumnStyleProps) => <Column {...props} />;
  public static Row = (props: IRowStyleProps) => <Row {...props} />;

  public constructor(props: ITableProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <Container>
        <Header>
          <Column><Bold color={Colors.white}>Pos</Bold></Column>
          <Column size={1}><Bold color={Colors.white}>Team</Bold></Column>
          <Column><Bold color={Colors.white}>P</Bold></Column>
          <Column><Bold color={Colors.white}>GD</Bold></Column>
          <Column><Bold color={Colors.white}>Pts</Bold></Column>
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}
