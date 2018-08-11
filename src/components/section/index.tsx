/**
 * Provides the section component
 */
import * as React from 'react';
import { Container, Content, HeaderContainer, Title } from './styles';

interface IHeaderProps {
  children: string;
}

interface ISectionProps {
  children: any;
}

const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => (
  <HeaderContainer>
    <Title>{props.children}</Title>
  </HeaderContainer>
);

/**
 * @class
 * @extends PureComponent
 */
export class Section extends React.Component<ISectionProps, {}> {
    public static Content = (props: any) => <Content {...props} />;
    public static Header = (props: IHeaderProps) => <Header {...props} />;

    public render(): React.ReactNode {
        return (
          <Container>
            {this.props.children}
          </Container>
        );
    }
}
