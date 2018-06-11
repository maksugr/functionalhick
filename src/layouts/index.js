import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';
import Title from '../components/Title';

import {colors} from '../constants';

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 690px;
  padding: 30px 25px 40px;
`;

const StyledRootHeader = styled.div`
  margin-bottom: 70px;
  text-align: center;
`;

const StyledArticleHeader = styled.div`
  margin-bottom: 70px;
`;

const StyledLead = styled.p`
  margin: 10px 0 0;
  color: ${colors.grey};
  font-size: 13px;
`;

const StyledChildrenWrapper = styled.div`
  margin-top: 20px;
`;

const Header = (
  <Link to={'/'}>
    <Title level='1'><i>f(</i>👨🏻‍🌾<i>)</i></Title>
  </Link>
);

const rootHeader = () => (
  <StyledRootHeader>
    {Header}
    <StyledLead>JavaScript guy explore functional world. <br /> Adventures start from Clojure and ClojureScript</StyledLead>
  </StyledRootHeader>
);

const arcticleHeader = () => (
  <StyledArticleHeader>
    {Header}
  </StyledArticleHeader>
);

class Template extends React.Component {
  render() {
    const {location, children} = this.props;
    const rootPath = typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__
      ? `${__PATH_PREFIX__}/`
      : '/';

    const header = location.pathname === rootPath
      ? rootHeader()
      : arcticleHeader();

    return (
      <StyledWrapper>
        {header}
        <StyledChildrenWrapper>
          {children()}
        </StyledChildrenWrapper>
      </StyledWrapper>
    );
  }
}

export default Template;
