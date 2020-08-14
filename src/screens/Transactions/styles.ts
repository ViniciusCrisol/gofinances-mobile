import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: #363f5f;
  font-size: 20px;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  height: 50px;
  border-radius: 5px;
  background-color: #ff872c;

  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  color: white;
  font-size: 14px;
`;
