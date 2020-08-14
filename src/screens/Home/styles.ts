import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  position: relative;

  height: 184px;
  background-color: #5636d3;
`;

export const HeaderContent = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24, paddingRight: 8 },
}))`
  top: 24px;
  position: absolute;
`;

export const Content = styled.View`
  flex: 1;
  padding: 84px 24px 0;
`;

export const Label = styled.Text`
  color: #363f5f;
  font-size: 20px;
  margin-bottom: 2px;
`;

export const ListContent = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 22, paddingBottom: 8 },
}))`
  flex: 1;
`;
