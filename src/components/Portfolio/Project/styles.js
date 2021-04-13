import styled from "styled-components";
import Img from "gatsby-image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  width: 100%;
  max-width: 687px;
  margin-top: 50px;
  padding: 0px auto;
`;
export const Title = styled.h3`
  font-size: 40px;
  color: #fff;
  text-align: center;
`;
export const Image = styled(Img)`
  height: 500px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const IconsContainer = styled.div`
  display: flex;
  max-width: 687px;
  width: 80%;
  min-width: 320px;
  height: 100px;
  top: 25%;
  justify-self: center;
  justify-content: space-around;
  position: absolute;

  @media (max-width: 374px) {
    top: 18px;
  }
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  /* filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  } */
`;
