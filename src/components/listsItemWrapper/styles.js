import styled, { css } from 'styled-components';
// theme
import theme from '../../theme';

export const Wrap = styled.div`
  background-color: ${theme.commonListsItemColor};
  border-radius: 15px;
  padding: 15px;
  height: 150px;
  width: 220px;
  margin-right: 30px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  ${(props) =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Content = styled.div``;

export const Count = styled.div`
  font-size: 40px;
  line-height: 40px;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
`;
