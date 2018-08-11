/**
 * Provides the list item component
 */
import * as React from 'react';
import { Container, Item } from './styles';
import { IItemProps, IListItemProps } from './types';

interface IState {}

export class ListItem extends React.PureComponent<IListItemProps, IState> {
  public static Item = (props: IItemProps) => <Item {...props} />;
  public constructor(props: IListItemProps) {
    super(props);
  }

  public render(): React.ReactNode {
    const { direction, backgroundColor } = this.props;

    return (
      <Container backgroundColor={backgroundColor}>
        {this.props.children}
      </Container>
    );
  }
}
