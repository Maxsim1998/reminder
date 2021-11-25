import T from 'prop-types';
// styles
import { Wrap, Top, Content, Count, Icon, Title } from './styles';
// icons
import { UnorderedListOutlined } from '@ant-design/icons';
// theme
import theme from '../../theme';

export const ListsItemWrapper = ({
  color,
  icon,
  iconBackground,
  count,
  title,
  children,
}) => (
  <Wrap color={color}>
    {children ? (
      children
    ) : (
      <Content>
        <Top>
          <Icon style={{ fontSize: 20 }} background={iconBackground}>
            {icon}
          </Icon>
          <Count>{count}</Count>
        </Top>
        <Title>{title}</Title>
      </Content>
    )}
  </Wrap>
);

ListsItemWrapper.propTypes = {
  color: T.string,
  icon: T.node,
  iconBackground: T.string,
  count: T.oneOfType([T.string, T.number]),
  title: T.string,
  children: T.node,
};

ListsItemWrapper.defaultProps = {
  icon: <UnorderedListOutlined />,
  count: 0,
  title: 'Some list',
  color: theme.commonListsItemColor,
};
