import styled from 'styled-components/native';

interface Props {
  type: 'income' | 'outcome';
}

export const Container = styled.View`
  width: 100%;
  height: 128px;

  padding: 24px;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: white;
`;

export const Title = styled.Text`
  color: #363f5f;
  font-size: 14px;
`;

export const ValueLabel = styled.Text<Props>`
  margin-top: 4px;
  font-size: 20px;
  color: ${({ type }) => (type === 'income' ? '#12A454' : '#E83F5B')};
`;

export const Footer = styled.View`
  margin-top: 19px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLabel = styled.Text`
  color: #969cb3;
  font-size: 14px;
`;
