import React from 'react';
import styled from 'styled-components';

import SocialImages from '../SocialImages';

import medium from '../../assets/medium.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import mail from '../../assets/mail.svg';
import {colors} from '../../constants';

const StyledFooter = styled.footer`
  margin-top: 25px;
`;

const StyledHr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.grey};
  margin-bottom: 25px;
`;

const StyledLabel = styled.p`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${colors.red}
`;

const socialImages = [
  {src: medium, link: 'https://medium.com/functionalhick'},
  {src: twitter, link: 'https://twitter.com/functionalhick'},
  {src: github, link: 'https://github.com/maksugr/functionalhick'},
  {src: mail, link: 'mailto:functionalhick@gmail.com'}
];

const Footer = () => (
  <StyledFooter>
    <StyledHr />
    <StyledLabel>Stay tuned</StyledLabel>
    <SocialImages images={socialImages} />
  </StyledFooter>
);

export default Footer;
