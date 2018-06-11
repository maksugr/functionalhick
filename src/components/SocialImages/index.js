import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import Image from '../Image';

const StyledSocialImage = styled.div`
  display: inline-block;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const SocialImage = ({images}) => (
  <div>
    {images.map((image, index) => (
      <StyledSocialImage key={index}>
        <Link href={image.link}>
          <Image src={image.src} width='25px' height='25px' />
        </Link>
      </StyledSocialImage>
    ))}
  </div>
);

export default SocialImage;
