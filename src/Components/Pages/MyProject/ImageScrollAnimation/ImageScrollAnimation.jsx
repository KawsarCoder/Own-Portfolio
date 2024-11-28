/* eslint-disable react/prop-types */
import styled from "styled-components";

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 190px;
  height: 200px;
`;

const ScrollingImage = styled.img`
  position: absolute;
  width: 100%;
  transition: transform 1s ease-out;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  &:hover ${ScrollingImage} {
    transform: translateY(-100%);
  }
`;

const ImageScrollAnimation = ({ imageUrl, alt }) => {
  return (
    <ImageContainer>
      <ImageWrapper>
        <ScrollingImage src={imageUrl} alt={alt} />
      </ImageWrapper>
    </ImageContainer>
  );
};

export default ImageScrollAnimation;
