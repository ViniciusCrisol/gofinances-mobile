import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  position: relative;

  height: 160px;
  background-color: #5636d3;
`;

export const HeaderContent = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24, paddingRight: 8 },
}))`
  top: 24px;
  position: absolute;
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;
