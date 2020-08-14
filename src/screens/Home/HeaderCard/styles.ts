import styled from 'styled-components/native';

interface Props {
  type: 'total' | 'income' | 'outcome';
}

export const Container = styled.View<Props>`
  width: 300px;
  height: 200px;

  padding: 24px;
  border-radius: 5px;
  margin-right: 16px;
  background-color: ${({ type }) => (type === 'total' ? '#FF872C' : 'white')};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LabelType = styled.Text<Props>`
  color: ${({ type }) => (type === 'total' ? 'white' : '#363f5f')};
  font-size: 14px;
`;

export const ValueText = styled.Text<Props>`
  margin-top: 40px;

  font-size: 30px;
  color: ${({ type }) => (type === 'total' ? 'white' : '#363f5f')};
`;

export const ValueLabel = styled.Text<Props>`
  margin-top: 6px;

  font-size: 14px;
  color: ${({ type }) => (type === 'total' ? 'white' : '#363f5f')};
`;
