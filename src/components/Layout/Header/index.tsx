import React from 'react';

import logo from '../../../assets/logo.png';
import formatDate from '../../../utils/formatDate';

import { Container, Logo, Label } from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo source={logo} />
    <Label>{formatDate(new Date())}</Label>
  </Container>
);

export default Header;
