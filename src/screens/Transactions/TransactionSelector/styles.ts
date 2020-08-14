import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Option = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))<Props>`
  width: 48%;
  height: 50px;
  border-radius: 5px;

  border: 2px;
  border-width: 1.5px;
  border-color: #969cb3;

  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const OptionLabel = styled.Text`
  margin-left: 14px;

  color: #363f5f;
  font-size: 14px;
`;
